const coroData =
    `1058	China	Hubei
111	China	Guangdong
104	China	Zhejiang
83	China	Henan
75	China	Chongqing
69	China	Hunan
68	China	Beijing
60	China	Anhui
46	China	Shandong
44	China	Sichuan
40	China	Shanghai
36	China	Guangxi
36	China	Jiangxi
35	China	Fujian
33	China	Jiangsu
22	China	Hainan
22	China	Shaanxi
21	China	Liaoning
16	China	Yunnan
15	China	Heilongjiang
14	China	Tianjin
13	China	Hebei
9	China	Shanxi
8	Hong Kong	Hong Kong
7	China	Inner Mongolia
7	China	Gansu
5	China	Guizhou
5	Macau	Macau
4	China	Ningxia
4	China	Jilin
4	Taiwan	Taiwan
4	China	Xinjiang
1	China	Qinghai
4	Japan	Japan
8	Thailand	Thailand
3	South Korea	South Korea
4	Singapore	Singapore
2	Vietnam	Vietnam
3	France	France
4	Australia	Australia
1	Nepal	Nepal
4	Malaysia	Malaysia
1	Canada	Ontario`;

let parsedData = parseData(coroData);
parsedData.forEach(element => {
    $("#coroTable").append(newTableEntry(element));
});

function parseData(D) {
    var parsed = [];
    var sp = D.split('\n');
    D.split('\n').forEach(element => {
        parsed.push(element.split('\t'));
    });
    return parsed;
}

function newTableEntry(d) {
    var tableLine = $('<tr></tr>');
    var firstValue = d[0];
    d.forEach(el => {
        var th = $('<th></th>');
        // th.css('line-height', firstValue / 15);
        tableLine.append(th.append(el));
    });
    // console.log(tableLine);
    return tableLine;
}