// Nano check
router.get('/connect/nano', isLoggedIn, function (req, res) {
    var user = req.user;
  
    res.render('auth/nano', { 
     loggedin: req.isAuthenticated(),
     user : req.user,
     payment_api: process.env.PAYMENT_API,
     amount: process.env.VERIFICATION_AMOUNT,
     amount_raw: Big(process.env.VERIFICATION_AMOUNT).times(multNANO).toFixed().toString()
    });
  
   });
  origin: near-examples/rust-multisig-example
  src/util/near-util.js/toNear
  const toNear = (value = '0') => Big(value).times(10 ** 24).toFixed()
  origin: near-examples/rust-multisig-example
  src/util/near-util.js/big
  const big = (value = '0') => Big(value)
  origin: me-io/node-currency-swap
  lib/provider/nationalbankofromania.js/self.fetchContent
  self.fetchContent(URL, function (err, content) {
    if (err) {
     return callback(err, null);
    }
  
    // Parse the content fetch from national bank of romania
    var xmlObj = self.parseContent(content);
    var rootCube = xmlObj.childNamed("Body");
    var cube = rootCube.childNamed("Cube");
  
    // return error if date is not available
    if (cube === null || _.isUndefined(cube) || _.isUndefined(cube.attr)) {
     return callback(new UnsupportedCurrencyPairException(currencyPair, Provider), null);
    }
  
    // search for quote currency rate
    var rateElement = cube.childWithAttribute('currency', currencyPair.getQuoteCurrency());
  
    // return error if rate is not available
    if (rateElement === null || _.isUndefined(rateElement) || _.isUndefined(rateElement.attr) || _.isUndefined(
      rateElement.val)) {
     return callback(new UnsupportedCurrencyPairException(currencyPair, Provider), null);
    }
  
    var val = Big(rateElement.val);
    var rate = rateElement.attr.multiplier ? val.div(Big(rateElement.attr.multiplier)) : val;
    var date = cube.attr.date ? new Date(cube.attr.date) : new Date();
  
    return callback(null, new Rate(rate.toString(), date, Provider));
   });
  origin: Raghav-intrigue/React-Blue-Calculator
  src/logic/operate.js/operate
  export default function operate(numberOne, numberTwo, operation) {
   const one = Big(numberOne || "0");
   const two = Big(numberTwo || "0");
   if (operation === "+") {
    return one.plus(two).toString();
   }
   if (operation === "-") {
    return one.minus(two).toString();
   }
   if (operation === "x") {
    return one.times(two).toString();
   }
   if (operation === "÷") {
    if (two === "0") {
     alert('Divide by 0 error');
     return "0";
    } else {
     return one.div(two).toString();
    }
   }
   throw Error(`Unknown operation '${operation}'`);
  }
  origin: Raghav-intrigue/React-Blue-Calculator
  src/logic/calculate.js/calculate
  const result = operate(obj.total, obj.next, obj.operation);
  return {
   total: Big(result)
    .div(Big("100"))
    .toString(),
   next: null,
   next: Big(obj.next)
    .div(Big("100"))
    .toString(),
  };
  origin: near-examples/rust-multisig-example
  src/util/near-util.js/nearTo
  const nearTo = (value = '0', to = 2) => Big(value).div(10 ** 24).toFixed(to === 0 ? undefined : to)
  origin: ronit123321/react-calculator
  src/logic/calculate.js/calculate
  const result = operate(obj.total, obj.next, obj.operation);
  return {
   total: Big(result)
    .div(Big("100"))
    .toString(),
   next: null,
   next: Big(obj.next)
    .div(Big("100"))
    .toString(),
  };
  origin: ronit123321/react-calculator
  src/logic/operate.js/operate
  export default function operate(numberOne, numberTwo, operation) {
   const one = Big(numberOne || "0");
   const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
   if (operation === "+") {
    return one.plus(two).toString();
   }
   if (operation === "-") {
    return one.minus(two).toString();
   }
   if (operation === "x") {
    return one.times(two).toString();
   }
   if (operation === "÷") {
    if (two === "0") {
     alert("Divide by 0 error");
     return "0";
    } else {
     return one.div(two).toString();
    }
   }
   throw Error(`Unknown operation '${operation}'`);
  }