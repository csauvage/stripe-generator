![](./stripe-generator-icon.png) 

![](https://img.shields.io/badge/I%20%3C3-Stripe-%234652FF.svg)
![](https://img.shields.io/badge/I%20%3C3-Stripe-%234652FF.svg)

#Stripe Generator

> Yet the best took to geneate _on-the-fly_ *test* datas for Stripe.
  - Myself

# Origin

I faced an issue while building a demo, how can I generate a bunch of fake data for my Stripe account ? As a software engineer, my moto is if you don't find it, build it ! And here it is. 

# Installation 

`npm install stripe-generator --global`
or if you prefer **yarn**
`yarn global add stripe-generator`

# Usage 

Once package installed create a `.striperc` or a `stripe.config.json` 
file (I highly recommand a per project configuration), containing your private key with the the following shape 

```json

{
	"stripe_key": "pk_test_************"
}

```

**Please note that `stripe-generator` will raise an exeception if you use a live key, this project is aimed for creating _test_ items**

# Commands available

Simply run `stripe-generator -H` or `stripe-generator --help` to see a list of available commands.



## Credits

 ![](./stripe-generator-icon-small.png) `stripe-generator` icon  by my good friend [@Webalys](https://twitter.com/webalys) 






