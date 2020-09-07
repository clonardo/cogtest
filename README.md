# Cogtest

## Projects in this workspace

At present, the following Nx projects are set up:
Name | Purpose | App/Lib | Internal Port | Notes
--- | --- | :---: |:---: | ---
**backend** | REST API + Auth | App | 3353 | N/A
**frontend** | React UI | App | 4202 | N/A

## Developing

- In general, install dependencies with `yarn`.
  - Note that with Nx monorepos, this installs ALL OF THE DEPENDENCIES, and may take a few minutes at first.
- Copy `sample.env` -> `.env` and configure to your little heart's content

The following tasks are also available:

- Start frontend and backend in dev mode: `yarn dev:all`
- Build all projects in prod mode: `yarn build`