# bms-cli

bms-cli-mg is a cli to help [fastify-restapi-prisma-boilerplate](https://github.com/maheryAlucard/fastify-restapi-prisma-boilerplate) user by simplify some action in the template.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install bms-cli-mg.
Cli need to be installed globally

```bash
npm install -g bms-cli-mg
```

## Usage

Create new backend project from [fastify-restapi-prisma-boilerplate](https://github.com/maheryAlucard/fastify-restapi-prisma-boilerplate), then cd to your project.

```bash
bms backend:create:project <project_name>
```

Add Model sets

```bash
bms backend:g:model <model_name>
```

Add new route method for existing model
Available method: [POST], [GET], [PUT], [DELETE]

```bash
bms backend:add:route <model_name> <method> <route_name>
```

Add socket message handler

```bash
bms backend:g:sochandler <socket_message_name>
```

Synchronies database (for more detail go to [Prisma](https://www.prisma.io/docs/))

```bash
bms backend:db:sync
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
