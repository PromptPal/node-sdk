# Changelog

## [0.4.6](https://github.com/PromptPal/node-sdk/compare/v0.4.5...v0.4.6) (2025-02-10)


### Bug Fixes

* **npm:** ignore tsbuild info in dist ([e70d68c](https://github.com/PromptPal/node-sdk/commit/e70d68c07a07a5e8922d8bba544466912b5aa273))
* **stream:** add error handling on stream api ([5162c9d](https://github.com/PromptPal/node-sdk/commit/5162c9dabecb70c7dacddf9f0ce12c3ac3fec9a5))

## [0.4.5](https://github.com/PromptPal/node-sdk/compare/v0.4.4...v0.4.5) (2025-02-02)


### Bug Fixes

* **node:** upgrade node to 23 ([1d09324](https://github.com/PromptPal/node-sdk/commit/1d09324be0746d2dc0d2cab1854f2a8d41897245))
* **npm:** move the file names that should be ignored in npm from git ([dd6cbe3](https://github.com/PromptPal/node-sdk/commit/dd6cbe3281350aeb925eb8d034882501f0185e11))

## [0.4.4](https://github.com/PromptPal/node-sdk/compare/v0.4.3...v0.4.4) (2025-02-02)


### Bug Fixes

* **build:** ignore some files in bundle because of the issue 😂 https://github.com/TencentCloud/tencentcloud-sdk-nodejs/issues/160 ([e7a0c8b](https://github.com/PromptPal/node-sdk/commit/e7a0c8b4625c32284c45646f5565577ce327349c))

## [0.4.3](https://github.com/PromptPal/node-sdk/compare/v0.4.2...v0.4.3) (2024-08-03)


### Bug Fixes

* **stream:** disable buffering in nginx by header setting ([d6b36c3](https://github.com/PromptPal/node-sdk/commit/d6b36c38af4d15fac96af85a84381b70599a9852))

## [0.4.2](https://github.com/PromptPal/node-sdk/compare/v0.4.1...v0.4.2) (2024-08-01)


### Bug Fixes

* **types:** fix types syntax ([9a832d1](https://github.com/PromptPal/node-sdk/commit/9a832d12588c88501317b72395b062065b82802a))

## [0.4.1](https://github.com/PromptPal/node-sdk/compare/v0.4.0...v0.4.1) (2024-08-01)


### Bug Fixes

* **stream:** fix streaming api handler ([f653b78](https://github.com/PromptPal/node-sdk/commit/f653b7842e348d246fa940859a77534d3df125c2))

## [0.4.0](https://github.com/PromptPal/node-sdk/compare/v0.3.0...v0.4.0) (2024-08-01)


### Features

* **openToken:** add temporary token support ([324b5b7](https://github.com/PromptPal/node-sdk/commit/324b5b795f386d060d57f5d13ebc2b97cf85b4e5))


### Bug Fixes

* **openToken:** remove Bearer in temporary token header ([ca642b8](https://github.com/PromptPal/node-sdk/commit/ca642b8cdfe2cf861ed6e67a6eb6d3bc1c17d287))

## [0.3.0](https://github.com/PromptPal/node-sdk/compare/v0.2.5...v0.3.0) (2024-07-17)


### Features

* **cache:** support server cache response ([3ae7e33](https://github.com/PromptPal/node-sdk/commit/3ae7e33508b7e71871d587d17bd75846bf6ec2e4))

## [0.2.5](https://github.com/PromptPal/node-sdk/compare/v0.2.4...v0.2.5) (2024-07-16)


### Bug Fixes

* **ci:** publish to jsr anyway ([542bf51](https://github.com/PromptPal/node-sdk/commit/542bf5163617b6dbf7d371d8102a67087e145e3b))

## [0.2.4](https://github.com/PromptPal/node-sdk/compare/v0.2.3...v0.2.4) (2024-07-16)


### Bug Fixes

* **ci:** upgrade jsr version when release ([215b956](https://github.com/PromptPal/node-sdk/commit/215b956366d0afa3c70908d664066db40514a8ed))

## [0.2.3](https://github.com/PromptPal/node-sdk/compare/v0.2.2...v0.2.3) (2024-07-16)


### Bug Fixes

* **ci:** fix testcases ([6531604](https://github.com/PromptPal/node-sdk/commit/6531604e635e9960eac22bcd1bc754db500de78c))

## [0.2.2](https://github.com/PromptPal/node-sdk/compare/v0.2.1...v0.2.2) (2024-07-12)


### Bug Fixes

* **ci:** fix ci ([85b1b7b](https://github.com/PromptPal/node-sdk/commit/85b1b7bd390a5ecb6cc99bf289d1f1db98251fff))

## [0.2.1](https://github.com/PromptPal/node-sdk/compare/v0.2.0...v0.2.1) (2024-07-12)


### Bug Fixes

* **ci:** fix ci ([85b1b7b](https://github.com/PromptPal/node-sdk/commit/85b1b7bd390a5ecb6cc99bf289d1f1db98251fff))

## [0.2.0](https://github.com/PromptPal/node-sdk/compare/v0.1.6...v0.2.0) (2024-07-11)


### Features

* **cache:** add a simple cache ([6ed963a](https://github.com/PromptPal/node-sdk/commit/6ed963a0d8dd8482e584392ca147851dbea561b4))
* **streaming:** add streaming api support ([fba72e8](https://github.com/PromptPal/node-sdk/commit/fba72e89128461416e807951603d3418fa56f084))
* **streaming:** update streaming api support ([8e0a762](https://github.com/PromptPal/node-sdk/commit/8e0a762fc27f6c1b19fe343ace5e4977dd5592da))


### Bug Fixes

* **stream:** fix type errors ([8e9dd84](https://github.com/PromptPal/node-sdk/commit/8e9dd84c6a1459cb139ddc4e8079b390f6dd23d5))

## [0.1.6](https://github.com/PromptPal/node-sdk/compare/v0.1.5...v0.1.6) (2024-04-30)


### Bug Fixes

* **client:** add user agent info to client ([0ac7b3b](https://github.com/PromptPal/node-sdk/commit/0ac7b3b37c8efb7319a644a443c26274dbe6744d))

## [0.1.5](https://github.com/PromptPal/node-sdk/compare/v0.1.4...v0.1.5) (2024-03-06)


### Bug Fixes

* **types:** update types info for deno ([5503cde](https://github.com/PromptPal/node-sdk/commit/5503cdefeed46df80a0da711d95c500fd6642ddf))

## [0.1.4](https://github.com/PromptPal/node-sdk/compare/v0.1.3...v0.1.4) (2024-03-06)


### Bug Fixes

* **types:** add configuration type ([e55aa1b](https://github.com/PromptPal/node-sdk/commit/e55aa1b1aa8a654fac21664445ce117d708ca8b8))

## [0.1.3](https://github.com/PromptPal/node-sdk/compare/v0.1.2...v0.1.3) (2024-03-04)


### Bug Fixes

* **docs:** add docs for project ([7e8ed92](https://github.com/PromptPal/node-sdk/commit/7e8ed92242d3478f0ebb1f1eec7003e5ea1a7cb5))

## [0.1.2](https://github.com/PromptPal/node-sdk/compare/v0.1.1...v0.1.2) (2024-03-04)


### Bug Fixes

* **npm:** fix npm entry file ([b5928e7](https://github.com/PromptPal/node-sdk/commit/b5928e7dbbd154f2cafc341a45f86b346b207f4e))
* **ts:** fix slow types issue that jsr raised ([94b17d3](https://github.com/PromptPal/node-sdk/commit/94b17d336c708f6263effbe6d877c148ce58a73c))

## [0.1.1](https://github.com/PromptPal/node-sdk/compare/v0.1.0...v0.1.1) (2024-03-04)


### Bug Fixes

* **ci:** fix ci issue that could not publish to npm and jsr ([08ffc3f](https://github.com/PromptPal/node-sdk/commit/08ffc3fe490f51ba9bd1359515099ae6bc116f6a))

## [0.1.0](https://github.com/PromptPal/node-sdk/compare/v0.0.5...v0.1.0) (2024-03-04)


### Features

* **jsr:** add jsr support ([15dad52](https://github.com/PromptPal/node-sdk/commit/15dad520c508a3bef5121807506ac39ff425591b))
* **npm:** update npm info ([5aad518](https://github.com/PromptPal/node-sdk/commit/5aad518d66e0e4be89af4ae66b8bb3b3c023484f))
* **test:** add tests ([7ab40ab](https://github.com/PromptPal/node-sdk/commit/7ab40abdec29589c1909bd9d76ed0d4652b6bc46))


### Bug Fixes

* **ci:** add coverage test command in ci ([b1057f7](https://github.com/PromptPal/node-sdk/commit/b1057f7061bea29911bf83bbca49295a54a6fede))
* **ci:** upgrade codecov ci to latest version ([db12427](https://github.com/PromptPal/node-sdk/commit/db124277b03c61db5af2c6ff1e6189a1a6bec44e))
* **main:** fix main entry ([e024eb1](https://github.com/PromptPal/node-sdk/commit/e024eb18409144af9964e5da62a40c3dbcdb650d))
* **npm:** fix npm info ([e4b6c23](https://github.com/PromptPal/node-sdk/commit/e4b6c23f2b67b9f21b4afb52455352141e75dbb7))
* **test:** fix coverage files and deps ([324a5ed](https://github.com/PromptPal/node-sdk/commit/324a5ed962c93f9f7c164d4b63da2c483eb7a59b))

## [0.0.5](https://github.com/PromptPal/node-sdk/compare/v0.0.4...v0.0.5) (2023-07-08)


### Bug Fixes

* **ci:** fix ci ([1e440b5](https://github.com/PromptPal/node-sdk/commit/1e440b5427c5904d1fad04b075380861303c3ae6))
* **ci:** try to fix ci ([9d147a9](https://github.com/PromptPal/node-sdk/commit/9d147a9cc63c77c91ee49b3656c757dd0c430784))
