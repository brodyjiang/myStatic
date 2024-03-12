let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

let u_balance_list_1 = [1000];

//最近7天的u本位合约余额数据，正序排列，时间小的在前面
let u_balance_list_7 = [
230369.77,
240626.06,
239624.90,
250112.20,
260038.57,
269945.24,
269875.09
]; //需保证数据为7条

//------------------------------------------------------30
let u_balance_list_30 = [
228483.60,
231914.16,
231847.93,
232410.37,
232340.25,
222075.14,
222006.15,
232971.56,
242951.57,
220292.04,
220232.93,
231489.70,
219929.26,
219858.06,
219788.33,
240685.00,
251109.17,
240705.93,
240624.86,
250607.41,
250535.13,
250445.08,
250356.10,
230369.77,
240626.06,
239624.90,
250112.20,
260038.57,
269945.24,
269875.09
];//需保证数据为30条

//------------------------------------------------------90
let u_balance_list_90 = [
108073.76,
124037.09,
121570.48,
121462.38,
121370.29,
119943.93,
144550.92,
144550.92,
144550.92,
143524.85,
139873.73,
150836.79,
149825.83,
168230.96,
162150.63,
160113.64,
159068.01,
158952.99,
171409.06,
190468.10,
193031.33,
182136.21,
179679.88,
174784.86,
174569.23,
174304.12,
174582.32,
185551.55,
183564.89,
179689.75,
178780.15,
178137.66,
174448.10,
171991.54,
169972.40,
169908.80,
165612.50,
184575.89,
184519.48,
184444.28,
196430.70,
195534.49,
194765.38,
207764.69,
196954.55,
196954.55,
196954.55,
196954.55,
196875.67,
196805.34,
196701.12,
207157.21,
217013.42,
216943.45,
227932.51,
205995.75,
205917.45,
205847.33,
216910.47,
216829.37,
228483.60,
231914.16,
231847.93,
232410.37,
232340.25,
222075.14,
222006.15,
232971.56,
242951.57,
220292.04,
220232.93,
231489.70,
219929.26,
219858.06,
219788.33,
240685.00,
251109.17,
240705.93,
240624.86,
250607.41,
250535.13,
250445.08,
250356.10,
230369.77,
240626.06,
239624.90,
250112.20,
260038.57,
269945.24,
269875.09
 ];//需保证数据为90条
//------------------------------------------------------365
let u_balance_list_365 = [
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
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
919.87,
883.34,
858.78,
915.10,
345.90,
474.81,
-546.74,
1456.36,
14175.37,
10257.73,
8742.78,
6733.92,
15817.02,
15757.00,
15641.86,
14413.25,
11730.63,
19400.37,
19200.41,
19104.93,
18988.75,
17798.15,
15513.47,
26366.35,
21430.62,
20234.44,
18859.01,
18740.13,
30005.14,
28831.11,
26292.69,
25177.62,
25449.10,
24255.26,
22207.49,
22207.49,
18225.38,
17205.29,
17086.57,
15959.55,
15833.89,
13670.32,
13544.06,
11226.98,
8614.04,
8499.53,
8401.98,
6891.00,
824.28,
824.28,
824.28,
-262.66,
-4130.37,
7483.04,
6412.10,
25909.06,
19468.04,
17310.21,
16202.55,
16080.71,
12030.58,
9786.17,
12501.45,
21258.30,
15270.75,
12617.30,
11528.64,
10502.41,
7935.66,
4237.40,
23603.51,
21707.15,
58601.59,
58544.93,
58436.24,
57276.43,
54744.04,
75200.28,
75011.51,
74921.38,
74811.71,
73687.78,
95844.52,
112697.64,
108038.31,
106909.12,
105610.71,
105498.49,
105388.87,
104280.58,
101884.32,
91831.69,
92087.97,
90960.98,
86195.89,
84085.88,
82996.69,
82996.69,
82884.62,
81820.71,
81702.09,
79659.68,
79540.49,
79414.61,
108073.76,
124037.09,
121570.48,
121462.38,
121370.29,
119943.93,
144550.92,
144550.92,
144550.92,
143524.85,
139873.73,
150836.79,
149825.83,
168230.96,
162150.63,
160113.64,
159068.01,
158952.99,
171409.06,
190468.10,
193031.33,
182136.21,
179679.88,
174784.86,
174569.23,
174304.12,
174582.32,
185551.55,
183564.89,
179689.75,
178780.15,
178137.66,
174448.10,
171991.54,
169972.40,
169908.80,
165612.50,
184575.89,
184519.48,
184444.28,
196430.70,
195534.49,
194765.38,
207764.69,
196954.55,
196954.55,
196954.55,
196954.55,
196875.67,
196805.34,
196701.12,
207157.21,
217013.42,
216943.45,
227932.51,
205995.75,
205917.45,
205847.33,
216910.47,
216829.37,
228483.60,
231914.16,
231847.93,
232410.37,
232340.25,
222075.14,
222006.15,
232971.56,
242951.57,
220292.04,
220232.93,
231489.70,
219929.26,
219858.06,
219788.33,
240685.00,
251109.17,
240705.93,
240624.86,
250607.41,
250535.13,
250445.08,
250356.10,
230369.77,
240626.06,
239624.90,
250112.20,
260038.57,
269945.24,
269875.09
];//需保证数据为365条

//最近7天的币本位合约余额数据，正序排列，时间小的在前面
let b_balance_list_7 = [];
let b_balance_list_30 = [];

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
            let balanceList = [];
            if (business === 'USDT_FUTURES') {
                if (diff === 7) {
                    balanceList = u_balance_list_1;
                }
                if (diff === 7) {
                    balanceList = u_balance_list_7;
                }
                if (diff === 30) {
                    balanceList = u_balance_list_30
                }
                if (diff === 90) {
                    balanceList = u_balance_list_90;
                }
                if (diff === 365) {
                    balanceList = u_balance_list_365;
                }
            }

            if (balanceList.length >= 1) {
                let profitNum = 0;
                let fairNum = 1;
                let totalProfit = 0;
                let totalLoss = 0;
                let userProfitRets = data.userProfitRets;
                userProfitRets.forEach((item, index) => {
                    //余额，用于计算累计盈亏和累计盈亏率，例如7天累计盈亏 = 当天余额 - 7天前的余额
                    item.balance = balanceList[index];
                    if (index > 0) {
                        //单日盈亏(当前余额 - 前一天的余额)
                        item.profit = item.balance - balanceList[index - 1];
                        if (item.profit > 0) {
                            //记录盈利天数
                            profitNum = profitNum + 1;
                            //记录累计盈利金额
                            totalProfit = totalProfit + item.profit;
                        } else if (item.profit === 0) {
                            //记录持平天数
                            fairNum = fairNum + 1;
                        } else {
                            //记录累计亏损金额
                            totalLoss = totalLoss + item.profit;
                        }
                    } else {
                        //单日盈亏（第一天为0）
                        item.profit = 0;
                    }
                    //净划入
                    item.transferIn = 0;
                });

                //盈利天数
                data.profitDays = profitNum;
                //亏损天数
                data.lossDays = balanceList.length - profitNum - fairNum;
                //持平天数
                data.fairDays = fairNum;
                //胜率
                data.winDaysRate = (profitNum * 100 / balanceList.length).toFixed(2);
                //总盈利
                data.totalProfit = totalProfit;
                //总亏损
                data.totalLoss = totalLoss * -1;
                //净盈利/亏损
                data.netProfit = data.totalProfit - data.totalLoss;
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
