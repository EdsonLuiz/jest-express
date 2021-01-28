# jest-express
Practicing tests with jest

## Notes
### For testing controllers
- Make sure the handler method exists in controller
- Make sure that the handler correctly calls your dependencies
- Make sure that the correct status code is being returned
- Make sure that the handler returns corret json body

### Separate the concerns
- Create a separate file to start server. This is important to avoid problems with integration tests.
- Create a file to orchestrate the call of the core methods.
- Create folders and files according to the features.

### dotenv
Ensure that the .env file has been added to the .gitignore before push any modification to github. Preserve a copy of the .env file, whitout sensible data, for use as an example by other developers.