using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IsraCommon.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using isracardGitRep.webCommon;

namespace isracardGitRep.Controllers
{
    [Route("api/GitRep")]
    public class GitRepController : Controller
    {

        
        // POST: api/GitRep
        // Set repository to the session
        [HttpPost]
        public void Post([FromBody] Repository rep)
        {
            // Get repository list from the session (using session extension - SessionExtensions.cs)
            var arrRepositories = HttpContext.Session.GetObject<List<Repository>>("myRepositories");

            if (arrRepositories == null)
            {
                arrRepositories = new List<Repository>();
            }

            // add the repository to the list if its not exist
            if (!arrRepositories.Exists(oRep => oRep.id == rep.id))
                arrRepositories.Add(rep);

            // update the session object
            HttpContext.Session.SetObject("myRepositories", arrRepositories);
        }


        // Get my repositories from the session
        [HttpGet("[action]")]
        public IEnumerable<Repository> GetMyRepositories()
        {

            List<Repository> arrRepositories = new List<Repository>();

            // get the repository list from the session
            arrRepositories = HttpContext.Session.GetObject<List<Repository>>("myRepositories");

            return arrRepositories.AsEnumerable();
        }



    }
}
