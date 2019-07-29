<p align="center">
  <img width="150" src="http://cdn.clementsauvage.me/oss/icon-normal.png">
</p>
<h3 align="center">Stripe Generator</h3>
<p align="center">
  <em>Generate a full set of Stripe fake data from command line</em>
</p>

## About

## Installation

`npm i -g stripe-cli`

or if you love **yarn**

`yarn global add stripe-cli`


## Setup

You need to provide your Stripe **private** key or a **[resticted key](https://stripe.com/blog/u2f-restricted-keys)** thought a `.striperc` or `stripe.config.json` file in the directory you'll run the CLI app with this scheme : 

```json
{
	"stripe_key": "pk_test_*******"
}
```

**⚠️ Warning : The program will raise an exception if you try to give an live key, this tool is intented to generate _FAKE DATASETS_**

**✅ Pro tip : You can use one config file per project as it's a common practice to have separate  Stripe accounts for separate projects**

## Usage

Start by using, you'll see all commands available and options
```bash
$ stripe --help
``` 


## Available commands

Here's some of available commands and few of their options
 
### Create customer

```bash
$ stripe create customer[s] --nationality=fr --attach-card
``` 

### Create charge

```bash
$ stripe create charge --customer=cus_XXXXXXX --amount=15000 --currency=EUR --token=tok_visa
``` 

### Create payout

```bash
$ stripe create payout --account=acct_XXXXXXX --amount=100000 --currency=USD
``` 


## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## Licence

See [LICENCE.md](./LICENCE.md)

## Maintainers

[Clément SAUVAGE](https://twitter.com/clementsauvage) 


## Credit 

The stripe generator icon was made by my good friend Vicent a.k.a [Webalys](https://twitter.com/webalys)
