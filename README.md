# APA Data Requester (Client)

This is primarily a toy project to teach myself about React and Redux. The outcome will be a simple single page web app that enables Australian citizens to request data held about them under the Australian Privacy Act by the Australian federal Police.

[![Build Status](https://travis-ci.org/davesag/apa-data-requester-client.svg?branch=develop)](https://travis-ci.org/davesag/apa-data-requester-client)

See [the corresponding server project](https://github.com/davesag/apa-data-requester).

## Background

The [Australian Privacy Act](https://www.oaic.gov.au/privacy-law/privacy-act/) allows Australian citizens to access personal information held about themselves by Australian companies and government agencies including the Australian Federal Police. You can request documents such as criminal records, investigation records and other data (with a few exceptions). To access these documents you simply lodge a `Privacy Request` with the Australian Federal Police. This can be done by emailing [privacy@afp.gov.au](mailto:privacy@afp.gov.au) with the following information:

* Your full name
* Date of birth
* Current residential address
* Contact details, such as email or phone number,
* Details as to the information you are seeking
* Some valid photo ID

If you are a journalist, you could supply the following wording:

"Under the terms of the Australian Privacy Act, I request access to all documents held by the AFP mentioning my name related to referrals to the AFP for investigation regarding leaks to me in my capacity as a journalist for [publication name]."

If you are not a journalist you could use this wording instead:

"Under the terms of the Australian Privacy Act, I request access to all documents held by the AFP mentioning my name, created between [date] and [date]."

The AFP then has 30 days to respond. It has internal access to a simple to use name search database and is able to pull up records by name if asked. If you are not satisfied with the response you get, or you don't think the AFP handed over all the information you believe they have that concerns you, then you can file a privacy complaint, and the Privacy Commissioner can consider whether to investigate the matter. The filing of these subsequent complaints is out of scope for this project however.

### Links

* http://www.crikey.com.au/2016/04/15/how-to-know-if-the-afp-is-spying-on-you-or-your-sources/ (My inspiration for this project)
* http://www.theguardian.com/media/2016/feb/12/the-afp-and-me-how-one-of-my-asylum-stories-sparked-a-200-page-police-investigation
* http://www.theguardian.com/world/2016/apr/14/federal-police-admit-seeking-access-to-reporters-metadata-without-warrant

# Development

This is, at heart, a toy project, whose aim is to teach myself to use Redux and React in a non-trivial way.

## Pre-requisites

* [NodeJS 5.1] or better. `brew install node` or even better use [NVM](https://github.com/creationix/nvm) and `nvm install 5.1`

Install [`webpack`]() and the `webpack-dev-server`.

```sh
npm install -g webpack webpack-dev-server
```

### To run the dev server

```sh
webpack-dev-server
```

### To test

```sh
npm test
```

