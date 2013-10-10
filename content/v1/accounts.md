---
title: Accounts | OANDA API
---

# Account Endpoints

* TOC
{:toc}

## GET /v1/accounts

#### Request
    curl -X GET "http://api-sandbox.oanda.com/v1/accounts?username=fxtrader"

#### Response
    [
       85454,
       95666,
       23633
    ]

## POST /v1/accounts

#### Request
    curl -X POST -H "Content-Type: application/x-www-form-urlencoded" "http://api-sandbox.oanda.com/v1/accounts"

#### Response
    {
        "username" : "keith",
        "password" : "Rocir~olf4",
        "accountId" : 8954947
    }

#### Parameters
**Optional**

* **currency**: Home currency of the newly created account

## GET /v1/accounts/:account_id

#### Request
    curl -X GET "http://api-sandbox.oanda.com/v1/accounts/8954947"

#### Response
    {
        "accountId" : 8954947,
        "accountName" : "Primary",
        "balance" : 100000,
        "unrealizedPl" : 0,
        "realizedPl" : 0,
        "marginUsed" : 0,
        "marginAvail" : 100000,
        "openTrades" : 0,
        "openOrders" : 0,
        "marginRate" : 0.05,
        "accountCurrency" : "USD"
    }
