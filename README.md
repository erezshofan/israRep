# israRep

This project is a asp.net core project based on angular2 and MVC.
The project made on VS 2017

## How to install the project

1\. Clone the repository:

```
git clone https://github.com/erezshofan/israRep.git
```

2\. Launch the project:

```bash
go to \israRep\isracardGitRep and open isracardGitRep.sln
```

3\. restore packages :

```
go to dependecies->npm folder in the project.
In the properties menu select "restore packages"
```

4\. execute the app :

```
Build and start the project to see the live app
```

## What’s in the repo

This repo includes the source code of _israRep_. The app has the following structure:

```

isracardGitRep
	IsraCommon							// Common project files like Entities	
		Entities 						// Entities of the project , server side
	isracardGitRep						// project files
		ClientApp						// client application
			app							// client app
				Entities				// entities client side
				Services				// services from client to the controllers server
				components  			// ** Components that get rendered into the page (HTML, CSS and TS files) **
				app.shared.module.ts	// components definitions
		Controllers						// server side MVC controllers
		Views
			Shared
				_Layout.cshtml			// main html header-body page
		webCommon						// common server web files
			SessionExtensions.cs		// extention to manage sessions
			
.gitignore
README.md

```
