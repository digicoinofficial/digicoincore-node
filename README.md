# digicoincore-node

A Digicoin full node for building applications and services with Node.js. A Digicoin node is extensible and can be configured to run additional services.

## Install

```bash
npm install -g digicoincore-node
digicoincore-node start
```

## Configuration

digicoincore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your digicoincore Node.

```bash
digicoincore-node create -d <digicoin-data-dir> mynode
cd mynode
digicoincore-node install <service>
digicoincore-node install https://github.com/yourname/helloworld
```

This will create a directory with configuration files for your node and install the necessary dependencies. For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of digicoincore:

- [Digicoin Insight API](https://github.com/digicoinofficial/insight-api)
- [Digicoin Explorer](https://github.com/digicoinofficial/digicoin-explorer)
