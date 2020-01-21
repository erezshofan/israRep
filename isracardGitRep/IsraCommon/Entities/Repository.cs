using System;
using System.Collections.Generic;
using System.Text;

namespace IsraCommon.Entities
{
    /// <summary>
    /// repository object
    /// </summary>
    public class Repository
    {
        public int id { get; set; }
        public string name { get; set; }
        public Owner owner { get; set; }

        public Repository() { }
    }
}
