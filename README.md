# HellMC-Distribution-Types

Independent implementation of the Helios distribution specification. TypeScript
types for the `distribution.json` **v2** format used by `HellMC-Core`,
`NeoNebula-HellMC` and the HellMC panel/client.

> **HellMC Client** is a fork of [HeliosLauncher](https://github.com/dscalzi/HeliosLauncher)
> by Daniel D. Scalzi (MIT). This package is a clean-room rewrite of the format
> described in HeliosLauncher's MIT-licensed `docs/distro.md`, **not** a fork of
> [`helios-distribution-types`](https://github.com/dscalzi/helios-distribution-types)
> (that repository carries no license, so it could not be forked or copied from).
> See `NOTICE`.

## What changed from v1 (Helios)

- `servers[]` (entries with `modules`) is renamed `versions[]`.
- `servers[]` now means a new concept: a catalog of Minecraft **servers**, each
  offering one or more **versions**. A version can belong to 0, 1 or several
  servers, and can always be played without one.
- `address`, `autoconnect`, `mainServer` and `discord` (per-entry) move from
  the version to the server.
- New fields: `format` (must be checked before parsing a distribution file —
  see [`Distribution`](src/distribution.ts)), `minClientVersion`, `Version.changelog`,
  `Version.label`, `Module.dependencies` (HellMC-only, used for optional mod
  dependency groups).

Full rationale: `docs/client-redesign/01-terminologia-i-dades.md` in
`HellMC-Client`.

## Usage

```ts
import { Distribution, Version, Server, Module, Type } from 'hellmc-distribution-types'
```

Consumed as a git dependency pinned to a tag (never a branch), e.g.:

```json
{
  "dependencies": {
    "hellmc-distribution-types": "github:TnTVlogs/HellMC-Distribution-Types#v1.0.0"
  }
}
```

## License

MIT — see `LICENSE` and `NOTICE`.
