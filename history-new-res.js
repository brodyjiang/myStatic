let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

let curr_balance = 720937.12;
let today_profit =-19865.36;
let profit_list_7 = 
    [
   -40.34,
11056.98,
-56.17,
10256.29,
-20895.34,
10487.30,
-19865.36
    ]
let profit_list_30 = 
    [
    -68.99,
10965.41,
9980.01,
-22659.53,
-59.11,
11256.77,
-11560.44,
-71.20,
-69.73,
20896.67,
10424.17,
-10403.24,
-81.07,
9982.55,
-72.28,
-90.05,
-88.98,
-19986.33,
10256.29,
-1001.16,
10487.30,
9926.37,
9906.67,
-40.34,
11056.98,
-56.17,
10256.29,
-20895.34,
10487.30,
-19865.36
    ]
let profit_list_90 = 
    [
    24606.99,
0.00,
0.00,
-1026.07,
-3651.12,
10963.06,
-1010.96,
18405.13,
-6080.33,
-2036.99,
-1045.63,
-115.02,
12456.07,
19059.04,
2563.23,
-10895.12,
-2456.33,
-4895.02,
-215.63,
-265.11,
278.20,
10969.23,
-1986.66,
-3875.14,
-909.60,
-642.49,
-3689.56,
-2456.56,
-2019.14,
-63.60,
-4296.30,
18963.39,
-56.41,
-75.20,
11986.42,
-896.21,
-769.11,
12999.31,
-10810.14,
0.00,
0.00,
0.00,
-78.88,
-70.33,
-104.22,
10456.09,
9856.21,
-69.97,
10989.06,
-21936.76,
-78.30,
-70.12,
11063.14,
-81.10,
11654.23,
3430.56,
-66.23,
562.44,
-70.12,
-10265.11,
-68.99,
10965.41,
9980.01,
-22659.53,
-59.11,
11256.77,
-11560.44,
-71.20,
-69.73,
20896.67,
10424.17,
-10403.24,
-81.07,
9982.55,
-72.28,
-90.05,
-88.98,
-19986.33,
10256.29,
-1001.16,
10487.30,
9926.37,
9906.67,
-40.34,
11056.98,
-56.17,
10256.29,
-20895.34,
10487.30,
-19865.36
    ]
let profit_list_365 = 
    [
    0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
23.66,
896.21,
-36.53,
-24.56,
56.32,
-569.20,
128.91,
-1021.55,
2003.10,
12719.01,
-3917.65,
-1514.95,
-2008.86,
9083.09,
-60.02,
-115.14,
-1228.61,
-2682.62,
7669.75,
-199.97,
-95.48,
-116.18,
-1190.60,
-2284.68,
10852.88,
-4935.73,
-1196.18,
-1375.43,
-118.88,
11265.01,
-1174.04,
-2538.41,
-1115.07,
271.48,
-1193.85,
-2047.76,
0.00,
-3982.11,
-1020.09,
-118.72,
-1127.02,
-125.66,
-2163.57,
-126.26,
-2317.09,
-2612.93,
-114.51,
-97.55,
-1510.97,
-6066.73,
0.00,
0.00,
-1086.94,
-3867.71,
11613.41,
-1070.93,
19496.96,
-6441.03,
-2157.83,
-1107.66,
-121.84,
-4050.13,
-2244.41,
2715.29,
8756.85,
-5987.55,
-2653.45,
-1088.66,
-1026.23,
-2566.75,
-3698.26,
19366.11,
-1896.36,
36894.44,
-56.66,
-108.69,
-1159.81,
-2532.39,
20456.24,
-188.77,
-90.13,
-109.67,
-1123.93,
22156.74,
16853.12,
-4659.33,
-1129.19,
-1298.41,
-112.22,
-109.62,
-1108.29,
-2396.26,
-10052.63,
256.28,
-1126.99,
-4765.09,
-2110.01,
-1089.19,
0.00,
-112.07,
-1063.91,
-118.62,
-2042.41,
-119.19,
-125.88,
28659.15,
15963.33,
-2466.61,
-108.10,
-92.09,
-1426.36,
24606.99,
0.00,
0.00,
-1026.07,
-3651.12,
10963.06,
-1010.96,
18405.13,
-6080.33,
-2036.99,
-1045.63,
-115.02,
12456.07,
19059.04,
2563.23,
-10895.12,
-2456.33,
-4895.02,
-215.63,
-265.11,
278.20,
10969.23,
-1986.66,
-3875.14,
-909.60,
-642.49,
-3689.56,
-2456.56,
-2019.14,
-63.60,
-4296.30,
18963.39,
-56.41,
-75.20,
11986.42,
-896.21,
-769.11,
12999.31,
-10810.14,
0.00,
0.00,
0.00,
-78.88,
-70.33,
-104.22,
10456.09,
9856.21,
-69.97,
10989.06,
-21936.76,
-78.30,
-70.12,
11063.14,
-81.10,
11654.23,
3430.56,
-66.23,
562.44,
-70.12,
-10265.11,
-68.99,
10965.41,
9980.01,
-22659.53,
-59.11,
11256.77,
-11560.44,
-71.20,
-69.73,
20896.67,
10424.17,
-10403.24,
-81.07,
9982.55,
-72.28,
-90.05,
-88.98,
-19986.33,
10256.29,
-1001.16,
10487.30,
9926.37,
9906.67,
-40.34,
11056.98,
-56.17,
10256.29,
-20895.34,
10487.30,
-19865.36
    ]
function callApi(url, onSuccess, onError) {
    $httpClient.get(url, (error, response, data) => {
        if (!error && response.statusCode === 200) {
            onSuccess(data);
        } else {
            onError(error);
        }
    });
}


callApi("https://doc.ccore.cc/cache/get?id="+headers['x-trace-id'],function (res) {
    try {
        let requestBody = JSON.parse(res)
        if (url.indexOf('futures/v1/private/future/user-daily-profit/getNewUserProfitStatistic') !== -1) {
            let beginTime = requestBody.beginTime;
            let endTime = requestBody.endTime;
            let business = requestBody.business;
            let diff = (endTime - beginTime) / 60 / 60 / 24 / 1000 + 1;

            let data = body.data;
            if (business === 'USDT_FUTURES') {
                if (data.userProfitRets.length === 1) {
                    // 总盈利
                    data.totalProfit = today_profit > 0 ? today_profit : 0;
                    // 总亏损
                    data.totalLoss = today_profit > 0 ? 0 : today_profit;
                    // 净盈利/亏损
                    data.netProfit = today_profit;
                    // 盈利天数
                    data.profitDays = today_profit > 0 ? 1 : 0;
                    // 亏损天数
                    data.lossDays = today_profit > 0 ? 0 : 1;
                    // 未产生盈利亏损天数
                    data.fairDays = today_profit === 0 ? 1 : 0;
                    // 盈利天数占比
                    data.winDaysRate = today_profit > 0 ? 1.0 : 0;
                    // 平均盈利
                    data.averageProfit = today_profit > 0 ? today_profit : 0;
                    // 平均亏损
                    data.averageLoss = today_profit > 0 ? 0 : today_profit;

                    data.userProfitRets.forEach(item => {
                        item.balance = curr_balance;
                        item.profit = today_profit;
                    })
                }
                let mock_data = null;
                if (diff === 7) {
                    mock_data = profit_list_7;
                }
                if (diff === 30) {
                    mock_data = profit_list_30;
                }
                if (diff === 90) {
                   mock_data = profit_list_90;
               }
                if (diff === 365) {
                  mock_data = profit_list_365;
               }
                if (mock_data != null) {
                    let profitNum = 0;
                    let fairNum = 0;
                    let totalProfit = 0;
                    let totalLoss = 0;
                    for(let i= data.userProfitRets.length-1; i>=0; i--){
                        if(i === data.userProfitRets.length-1) {
                            data.userProfitRets[i].balance = curr_balance;
                        }else {
                            data.userProfitRets[i].balance = data.userProfitRets[i+1].balance + mock_data[i]
                        }
                        data.userProfitRets[i].profit = mock_data[i];
                        if(data.userProfitRets[i].profit > 0) {
                            totalProfit += data.userProfitRets[i].profit
                            profitNum++;
                        }else if(data.userProfitRets[i].profit === 0) {
                            fairNum++;
                        }else {
                            totalLoss += data.userProfitRets[i].profit
                        }
                    }
                    data.profitDays = profitNum;
                    //亏损天数
                    data.lossDays = data.userProfitRets.length - profitNum - fairNum;
                    //持平天数
                    data.fairDays = fairNum;
                    //胜率
                    data.winDaysRate = (profitNum * 100 / data.userProfitRets.length).toFixed(2);
                    //总盈利
                    data.totalProfit = totalProfit;
                    //总亏损
                    data.totalLoss = totalLoss * -1;
                    //净盈利/亏损
                    data.netProfit = data.totalProfit - data.totalLoss;
                }
            }

            $done({body: JSON.stringify(body)})
        } else {
            $done({})
        }
    } catch (e) {
        let data = body.data;
        data = {};
        $done({body: JSON.stringify(body)})
    }
},function (err) {
    $done({})
})
