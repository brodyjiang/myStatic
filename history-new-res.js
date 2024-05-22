let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

let curr_balance =1176542.97;
let today_profit =678.77;
let profit_list_7 = 
    [
1432.12,
-1978.21,
-2561.21,
-4697.17,
-2978.29,
-3153.47,
678.77
    ]
let profit_list_30 = 
    [
  814.36,
689.14,
809.74,
749.18,
1188.47,
6334.16,
1670.79,
805.96,
415.41,
-4967.00,
-93.66,
-1064.78,
-908.90,
10717.56,
-671.90,
876.86,
-731.57,
830.15,
457.29,
793.55,
607.57,
2357.38,
-245.43,
1432.12,
-1978.21,
-2561.21,
-4697.17,
-2978.29,
-3153.47,
678.77
    ]
let profit_list_90 = 
    [
847.93,
900.33,
4221.86,
11200.24,
11389.11,
4551.46,
1900.34,
1683.76,
3870.98,
-185.79,
-8963.12,
-5093.23,
7674.13,
846.72,
1487.11,
-1867.22,
2149.33,
-371.26,
704.60,
6772.56,
12553.99,
3254.02,
-358.09,
9585.16,
7793.70,
1876.12,
11308.43,
-9.99,
5298.93,
724.69,
766.80,
676.94,
88.54,
2390.14,
6680.43,
716.87,
1346.74,
318.21,
1020.65,
-2668.67,
-4100.81,
681.85,
721.63,
791.88,
2663.34,
-399.83,
611.37,
39.27,
3433.43,
-7181.21,
-265.26,
-637.96,
665.45,
664.20,
2090.83,
-430.12,
805.31,
893.30,
702.10,
647.05,
814.36,
689.14,
809.74,
749.18,
1188.47,
6334.16,
1670.79,
805.96,
415.41,
-4967.00,
-93.66,
-1064.78,
-908.90,
10717.56,
-671.90,
876.86,
-731.57,
830.15,
457.29,
793.55,
607.57,
2357.38,
-245.43,
1432.12,
-1978.21,
-2561.21,
-4697.17,
-2978.29,
-3153.47,
678.77
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
752.13,
1062.15,
868.82,
597.14,
619.06,
801.81,
6347.33,
3503.59,
-492.83,
542.37,
912.05,
613.81,
613.24,
4022.78,
-352.90,
-2602.87,
-325.53,
761.83,
551.32,
562.43,
-1200.32,
814.00,
-2167.83,
-388.48,
656.46,
847.93,
900.33,
-4221.86,
-1200.24,
-389.11,
551.46,
609.48,
562.43,
1200.32,
814.00,
2167.83,
-388.48,
656.46,
847.93,
517.71,
562.43,
1200.32,
814.00,
-2167.83,
-388.48,
-656.46,
-847.93,
900.33,
4221.86,
-45.29,
151.57,
2550.54,
-154.57,
278.88,
460.22,
392.61,
464.62,
1231.54,
661.85,
868.82,
597.14,
619.06,
801.81,
4347.33,
3103.59,
-492.83,
542.37,
912.05,
613.81,
613.24,
4022.78,
-352.90,
2602.87,
-325.53,
761.83,
551.32,
562.43,
1200.32,
814.00,
2167.83,
-388.48,
656.46,
847.93,
900.33,
4221.86,
11200.24,
11389.11,
4551.46,
1900.34,
1683.76,
3870.98,
-185.79,
-8963.12,
-5093.23,
7674.13,
846.72,
1487.11,
-1867.22,
2149.33,
-371.26,
704.60,
6772.56,
12553.99,
3254.02,
-358.09,
9585.16,
7793.70,
1876.12,
11308.43,
-9.99,
5298.93,
724.69,
766.80,
676.94,
88.54,
2390.14,
6680.43,
716.87,
1346.74,
318.21,
1020.65,
-2668.67,
-4100.81,
681.85,
721.63,
791.88,
2663.34,
-399.83,
611.37,
39.27,
3433.43,
-7181.21,
-265.26,
-637.96,
665.45,
664.20,
2090.83,
-430.12,
805.31,
893.30,
702.10,
647.05,
814.36,
689.14,
809.74,
749.18,
1188.47,
6334.16,
1670.79,
805.96,
415.41,
-4967.00,
-93.66,
-1064.78,
-908.90,
10717.56,
-671.90,
876.86,
-731.57,
830.15,
457.29,
793.55,
607.57,
2357.38,
-245.43,
1432.12,
-1978.21,
-2561.21,
-4697.17,
-2978.29,
-3153.47,
678.77
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
