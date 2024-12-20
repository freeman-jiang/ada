"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartData {
  [key: string]: {
    [key: string]: number;
  };
}

const chartData: ChartData = {
  disgust: {
    "1925": 0.190914723,
    "1926": 0.223062255,
    "1927": 0.210434832,
    "1928": 0.1730735586,
    "1929": 0.2136509342,
    "1930": 0.1988696561,
    "1931": 0.1553765918,
    "1932": 0.1854566642,
    "1933": 0.2039491808,
    "1934": 0.1880453465,
    "1935": 0.2070016927,
    "1936": 0.1885208618,
    "1937": 0.1610054202,
    "1938": 0.1714520273,
    "1939": 0.1613576418,
    "1940": 0.141158586,
    "1941": 0.1320254753,
    "1942": 0.1676107935,
    "1943": 0.2049231542,
    "1944": 0.1825306269,
    "1945": 0.2001711319,
    "1946": 0.1804727424,
    "1947": 0.1911162964,
    "1948": 0.2032870914,
    "1949": 0.1790501319,
    "1950": 0.179942102,
    "1951": 0.1886831568,
    "1952": 0.1645664022,
    "1953": 0.160716844,
    "1954": 0.1561786717,
    "1955": 0.1810960232,
    "1956": 0.1760762123,
    "1957": 0.1860873439,
    "1958": 0.2069499607,
    "1959": 0.2165232709,
    "1960": 0.2232653155,
    "1961": 0.1914726252,
    "1962": 0.2298937357,
    "1963": 0.2119354342,
    "1964": 0.1946693145,
    "1965": 0.1977503547,
    "1966": 0.1820282284,
    "1967": 0.2115555136,
    "1968": 0.2260166583,
    "1969": 0.2259643849,
    "1970": 0.2385219711,
    "1971": 0.2050597321,
    "1972": 0.2554164284,
    "1973": 0.2412119139,
    "1974": 0.2611523304,
    "1975": 0.2305288568,
    "1976": 0.2517126746,
    "1977": 0.1989531941,
    "1978": 0.2056920077,
    "1979": 0.1617439196,
    "1980": 0.1964616393,
    "1981": 0.2035024548,
    "1982": 0.1882189258,
    "1983": 0.1951988788,
    "1984": 0.1762553606,
    "1985": 0.209696205,
    "1986": 0.1851673604,
    "1987": 0.2033379568,
    "1988": 0.1824933574,
    "1989": 0.1918926522,
    "1990": 0.2050101843,
    "1991": 0.1865580263,
    "1992": 0.1725530958,
    "1993": 0.1882802995,
    "1994": 0.1647019237,
    "1995": 0.154516328,
    "1996": 0.1657726823,
    "1997": 0.1671566446,
    "1998": 0.1752137859,
    "1999": 0.1939504895,
    "2000": 0.1656150176,
    "2001": 0.1767372075,
    "2002": 0.1661469061,
    "2003": 0.1605749403,
    "2004": 0.1727663382,
    "2005": 0.1686927039,
    "2006": 0.165777115,
    "2007": 0.1693243652,
    "2008": 0.1559656478,
    "2009": 0.1464820872,
    "2010": 0.143204745,
    "2011": 0.1307701417,
  },
  fear: {
    "1925": 0.1049466841,
    "1926": 0.0546314487,
    "1927": 0.1590724101,
    "1928": 0.1289015406,
    "1929": 0.1080800429,
    "1930": 0.1225600277,
    "1931": 0.1329004565,
    "1932": 0.1348281822,
    "1933": 0.1194453023,
    "1934": 0.113025072,
    "1935": 0.1120975832,
    "1936": 0.1238122203,
    "1937": 0.0974794773,
    "1938": 0.0844076062,
    "1939": 0.125025154,
    "1940": 0.1276138148,
    "1941": 0.1279939429,
    "1942": 0.1413824729,
    "1943": 0.1575506913,
    "1944": 0.128843553,
    "1945": 0.1635965742,
    "1946": 0.1144415016,
    "1947": 0.200028016,
    "1948": 0.1386688946,
    "1949": 0.1240892355,
    "1950": 0.1256598826,
    "1951": 0.1641083883,
    "1952": 0.1276847724,
    "1953": 0.1206404945,
    "1954": 0.1461996298,
    "1955": 0.1808864952,
    "1956": 0.1489645283,
    "1957": 0.1678962522,
    "1958": 0.1731914393,
    "1959": 0.1387190494,
    "1960": 0.13781481,
    "1961": 0.1360426988,
    "1962": 0.1413922177,
    "1963": 0.132261154,
    "1964": 0.1360504962,
    "1965": 0.1542407303,
    "1966": 0.1434309382,
    "1967": 0.1613639735,
    "1968": 0.1555339292,
    "1969": 0.1250787586,
    "1970": 0.115273165,
    "1971": 0.1368994458,
    "1972": 0.1209993483,
    "1973": 0.1658244666,
    "1974": 0.1379302764,
    "1975": 0.138502322,
    "1976": 0.1425745624,
    "1977": 0.1469456156,
    "1978": 0.1875416773,
    "1979": 0.1697032035,
    "1980": 0.1704532958,
    "1981": 0.1597856759,
    "1982": 0.144756007,
    "1983": 0.1655986389,
    "1984": 0.1352758476,
    "1985": 0.1512001259,
    "1986": 0.1554981952,
    "1987": 0.1607772423,
    "1988": 0.1539544264,
    "1989": 0.1531014087,
    "1990": 0.1689461498,
    "1991": 0.146246234,
    "1992": 0.1597037621,
    "1993": 0.1284556415,
    "1994": 0.1320806677,
    "1995": 0.1631087003,
    "1996": 0.134978053,
    "1997": 0.1521668075,
    "1998": 0.1396481979,
    "1999": 0.1448595935,
    "2000": 0.1501431156,
    "2001": 0.1289548183,
    "2002": 0.1532918797,
    "2003": 0.1534976244,
    "2004": 0.1496871707,
    "2005": 0.1678536085,
    "2006": 0.1685058325,
    "2007": 0.1607838912,
    "2008": 0.1591869971,
    "2009": 0.1675251457,
    "2010": 0.1620792517,
    "2011": 0.1564703149,
  },
  anger: {
    "1925": 0.1658135634,
    "1926": 0.1793758651,
    "1927": 0.151486741,
    "1928": 0.2169316848,
    "1929": 0.2181146092,
    "1930": 0.1913407839,
    "1931": 0.2256744403,
    "1932": 0.218388762,
    "1933": 0.177849211,
    "1934": 0.2106572953,
    "1935": 0.2019297076,
    "1936": 0.2191911942,
    "1937": 0.1983055812,
    "1938": 0.2569761506,
    "1939": 0.2272742813,
    "1940": 0.243407324,
    "1941": 0.2195217999,
    "1942": 0.1884263506,
    "1943": 0.1868772625,
    "1944": 0.1993764796,
    "1945": 0.1794704422,
    "1946": 0.2425674312,
    "1947": 0.1951233613,
    "1948": 0.2389781111,
    "1949": 0.2068457687,
    "1950": 0.2402066286,
    "1951": 0.1996352916,
    "1952": 0.2514421077,
    "1953": 0.2188817543,
    "1954": 0.2469576255,
    "1955": 0.2175475438,
    "1956": 0.2183926607,
    "1957": 0.207054387,
    "1958": 0.2347318856,
    "1959": 0.2490373106,
    "1960": 0.2044301576,
    "1961": 0.1992044861,
    "1962": 0.2094818396,
    "1963": 0.2169602054,
    "1964": 0.1994219345,
    "1965": 0.212578405,
    "1966": 0.2318225978,
    "1967": 0.2037350857,
    "1968": 0.2027103516,
    "1969": 0.2141185744,
    "1970": 0.2018095884,
    "1971": 0.2203625451,
    "1972": 0.2207080016,
    "1973": 0.1956130784,
    "1974": 0.2026801621,
    "1975": 0.2219678398,
    "1976": 0.197426131,
    "1977": 0.2050526284,
    "1978": 0.1843328733,
    "1979": 0.194151146,
    "1980": 0.1752922422,
    "1981": 0.1936816732,
    "1982": 0.2039756353,
    "1983": 0.2113584864,
    "1984": 0.203941732,
    "1985": 0.1932938283,
    "1986": 0.2128041666,
    "1987": 0.2024043255,
    "1988": 0.2004890366,
    "1989": 0.2145507506,
    "1990": 0.2188223129,
    "1991": 0.2034043992,
    "1992": 0.226217537,
    "1993": 0.2217887788,
    "1994": 0.2342287999,
    "1995": 0.2333972756,
    "1996": 0.2187447744,
    "1997": 0.2236004025,
    "1998": 0.2151861852,
    "1999": 0.1908173528,
    "2000": 0.1849702453,
    "2001": 0.1941213305,
    "2002": 0.2043143433,
    "2003": 0.1909403232,
    "2004": 0.1925222605,
    "2005": 0.1721137724,
    "2006": 0.1717318566,
    "2007": 0.1868864271,
    "2008": 0.1682306209,
    "2009": 0.1709384577,
    "2010": 0.1840396606,
    "2011": 0.1821679248,
  },
  neutral: {
    "1925": 0.2396416352,
    "1926": 0.2060610249,
    "1927": 0.1923657475,
    "1928": 0.2123612838,
    "1929": 0.2012453777,
    "1930": 0.2375508301,
    "1931": 0.2102935178,
    "1932": 0.2256230955,
    "1933": 0.2421526064,
    "1934": 0.2032788613,
    "1935": 0.2300979409,
    "1936": 0.2319602256,
    "1937": 0.2666201469,
    "1938": 0.2369063386,
    "1939": 0.2146791902,
    "1940": 0.2350311332,
    "1941": 0.2256183288,
    "1942": 0.2487015358,
    "1943": 0.2340182532,
    "1944": 0.2231133668,
    "1945": 0.2234521113,
    "1946": 0.2272491157,
    "1947": 0.172487077,
    "1948": 0.22043623,
    "1949": 0.2074583962,
    "1950": 0.205924276,
    "1951": 0.2050629801,
    "1952": 0.2087741144,
    "1953": 0.2290902809,
    "1954": 0.2347680428,
    "1955": 0.1930612819,
    "1956": 0.2527443805,
    "1957": 0.1904811274,
    "1958": 0.1919690235,
    "1959": 0.1680105515,
    "1960": 0.2003163455,
    "1961": 0.1893997818,
    "1962": 0.1817662746,
    "1963": 0.1958177534,
    "1964": 0.2008204963,
    "1965": 0.1995396195,
    "1966": 0.2269102489,
    "1967": 0.2233434186,
    "1968": 0.2041669918,
    "1969": 0.198494806,
    "1970": 0.1935978058,
    "1971": 0.2051568917,
    "1972": 0.2022497509,
    "1973": 0.1713602147,
    "1974": 0.2095124193,
    "1975": 0.2023990148,
    "1976": 0.1859137357,
    "1977": 0.1978680444,
    "1978": 0.1876939509,
    "1979": 0.2300874287,
    "1980": 0.2101010541,
    "1981": 0.2071524395,
    "1982": 0.2084292629,
    "1983": 0.1937024502,
    "1984": 0.2222597107,
    "1985": 0.2157416078,
    "1986": 0.1947715786,
    "1987": 0.2045285256,
    "1988": 0.2131369872,
    "1989": 0.1887066046,
    "1990": 0.1891518068,
    "1991": 0.2085142061,
    "1992": 0.2055864588,
    "1993": 0.2127216927,
    "1994": 0.2169974473,
    "1995": 0.2069754572,
    "1996": 0.2366407945,
    "1997": 0.2120173414,
    "1998": 0.2107480999,
    "1999": 0.2151201965,
    "2000": 0.2265528522,
    "2001": 0.2236525394,
    "2002": 0.2269592101,
    "2003": 0.2193819271,
    "2004": 0.2220195567,
    "2005": 0.2330361195,
    "2006": 0.2301460948,
    "2007": 0.2269809399,
    "2008": 0.2329144832,
    "2009": 0.230108428,
    "2010": 0.2329411226,
    "2011": 0.2386370163,
  },
  sadness: {
    "1925": 0.1838240137,
    "1926": 0.2193907894,
    "1927": 0.1842077583,
    "1928": 0.1830565399,
    "1929": 0.1494707702,
    "1930": 0.165974848,
    "1931": 0.1776675224,
    "1932": 0.1375529274,
    "1933": 0.1553805182,
    "1934": 0.1776520026,
    "1935": 0.1606401127,
    "1936": 0.1499946034,
    "1937": 0.170169878,
    "1938": 0.1535198108,
    "1939": 0.1755109691,
    "1940": 0.1552072396,
    "1941": 0.1696084271,
    "1942": 0.1499164141,
    "1943": 0.1250798612,
    "1944": 0.1790905624,
    "1945": 0.1662619805,
    "1946": 0.1668855175,
    "1947": 0.1482951752,
    "1948": 0.133035713,
    "1949": 0.1863036013,
    "1950": 0.1712400417,
    "1951": 0.1650377453,
    "1952": 0.1737718212,
    "1953": 0.1634651083,
    "1954": 0.1369474919,
    "1955": 0.1446845499,
    "1956": 0.1283231141,
    "1957": 0.1504477573,
    "1958": 0.1339372656,
    "1959": 0.1341444198,
    "1960": 0.1392828866,
    "1961": 0.1873089487,
    "1962": 0.1593125989,
    "1963": 0.1700023972,
    "1964": 0.1678138874,
    "1965": 0.1546315657,
    "1966": 0.1322103543,
    "1967": 0.1167062504,
    "1968": 0.1353496649,
    "1969": 0.1697008252,
    "1970": 0.162004957,
    "1971": 0.1458127954,
    "1972": 0.1360668643,
    "1973": 0.1548130123,
    "1974": 0.1131253274,
    "1975": 0.1415536732,
    "1976": 0.1550056166,
    "1977": 0.1722841648,
    "1978": 0.1667920059,
    "1979": 0.1575927342,
    "1980": 0.1619945822,
    "1981": 0.1391775216,
    "1982": 0.1699566224,
    "1983": 0.1448778296,
    "1984": 0.1573750866,
    "1985": 0.1383345802,
    "1986": 0.1542803824,
    "1987": 0.1494046864,
    "1988": 0.1653967944,
    "1989": 0.1514780078,
    "1990": 0.1352814297,
    "1991": 0.1597209506,
    "1992": 0.1580461779,
    "1993": 0.1772408033,
    "1994": 0.1602435307,
    "1995": 0.1611830141,
    "1996": 0.1593904968,
    "1997": 0.1523003795,
    "1998": 0.1767959062,
    "1999": 0.1682153397,
    "2000": 0.1765598618,
    "2001": 0.188646258,
    "2002": 0.1660229946,
    "2003": 0.1764123057,
    "2004": 0.1727499904,
    "2005": 0.1704240289,
    "2006": 0.1663667333,
    "2007": 0.1636377127,
    "2008": 0.1737651789,
    "2009": 0.176743039,
    "2010": 0.1736772836,
    "2011": 0.1841863983,
  },
  surprise: {
    "1925": 0.0423220231,
    "1926": 0.044451268,
    "1927": 0.0550278466,
    "1928": 0.040720157,
    "1929": 0.0353677518,
    "1930": 0.0309631687,
    "1931": 0.0510861125,
    "1932": 0.0505086302,
    "1933": 0.0463263242,
    "1934": 0.047886831,
    "1935": 0.0450031412,
    "1936": 0.0321674812,
    "1937": 0.0558071163,
    "1938": 0.0401851573,
    "1939": 0.0516476653,
    "1940": 0.0497456141,
    "1941": 0.0596225979,
    "1942": 0.0377843708,
    "1943": 0.0376055914,
    "1944": 0.0487585573,
    "1945": 0.0328789242,
    "1946": 0.032182708,
    "1947": 0.0547497759,
    "1948": 0.0458373654,
    "1949": 0.0546252005,
    "1950": 0.042875907,
    "1951": 0.0422754468,
    "1952": 0.0466239851,
    "1953": 0.0595550017,
    "1954": 0.0362082438,
    "1955": 0.0532377537,
    "1956": 0.0384635652,
    "1957": 0.0504689214,
    "1958": 0.0338891439,
    "1959": 0.0591502109,
    "1960": 0.0414618957,
    "1961": 0.050319499,
    "1962": 0.0490597963,
    "1963": 0.0278396383,
    "1964": 0.0454828188,
    "1965": 0.0432160394,
    "1966": 0.0485196614,
    "1967": 0.0474768037,
    "1968": 0.0455460521,
    "1969": 0.0326636021,
    "1970": 0.0475847682,
    "1971": 0.043409128,
    "1972": 0.036955937,
    "1973": 0.0390831615,
    "1974": 0.0360160302,
    "1975": 0.0266019331,
    "1976": 0.0249164543,
    "1977": 0.0380952616,
    "1978": 0.0290179242,
    "1979": 0.0461352228,
    "1980": 0.0417413454,
    "1981": 0.0351320023,
    "1982": 0.0331292647,
    "1983": 0.04410662,
    "1984": 0.0495293351,
    "1985": 0.0455992461,
    "1986": 0.0507231163,
    "1987": 0.039566932,
    "1988": 0.0437869241,
    "1989": 0.0464944492,
    "1990": 0.0500042101,
    "1991": 0.0475091359,
    "1992": 0.0497854149,
    "1993": 0.0416874878,
    "1994": 0.0467522278,
    "1995": 0.0500614523,
    "1996": 0.0475667674,
    "1997": 0.0548270604,
    "1998": 0.0413915857,
    "1999": 0.0435509599,
    "2000": 0.0531666083,
    "2001": 0.0448725925,
    "2002": 0.0450053611,
    "2003": 0.0531429181,
    "2004": 0.0490039213,
    "2005": 0.0469983243,
    "2006": 0.0531566537,
    "2007": 0.0470254678,
    "2008": 0.0562227636,
    "2009": 0.0591238292,
    "2010": 0.0521219103,
    "2011": 0.0497433538,
  },
  joy: {
    "1925": 0.0725373571,
    "1926": 0.073027357,
    "1927": 0.0474046718,
    "1928": 0.0449552393,
    "1929": 0.0740705117,
    "1930": 0.0527406897,
    "1931": 0.0470013567,
    "1932": 0.047641745,
    "1933": 0.0548968555,
    "1934": 0.0594545956,
    "1935": 0.0432298255,
    "1936": 0.0543534104,
    "1937": 0.0506123775,
    "1938": 0.0565529019,
    "1939": 0.0445050948,
    "1940": 0.0478362915,
    "1941": 0.0656094288,
    "1942": 0.0661780624,
    "1943": 0.0539451791,
    "1944": 0.0382868555,
    "1945": 0.0341688348,
    "1946": 0.0362009867,
    "1947": 0.0382002946,
    "1948": 0.0197565946,
    "1949": 0.041627665,
    "1950": 0.0341511607,
    "1951": 0.0351969951,
    "1952": 0.0271367931,
    "1953": 0.0476505195,
    "1954": 0.042740296,
    "1955": 0.0294863495,
    "1956": 0.0370355375,
    "1957": 0.0475642128,
    "1958": 0.0253312858,
    "1959": 0.0344151887,
    "1960": 0.0534285942,
    "1961": 0.0462519616,
    "1962": 0.0290935373,
    "1963": 0.0451834134,
    "1964": 0.0557410531,
    "1965": 0.0380432799,
    "1966": 0.0350779621,
    "1967": 0.0358189546,
    "1968": 0.0306763517,
    "1969": 0.0339790437,
    "1970": 0.0412077511,
    "1971": 0.0432994636,
    "1972": 0.0276036694,
    "1973": 0.0320941519,
    "1974": 0.0395834574,
    "1975": 0.0384463555,
    "1976": 0.042450828,
    "1977": 0.0408010897,
    "1978": 0.0389295561,
    "1979": 0.0405863486,
    "1980": 0.0439558429,
    "1981": 0.0615682389,
    "1982": 0.0515342848,
    "1983": 0.0451570957,
    "1984": 0.0553629266,
    "1985": 0.0461344055,
    "1986": 0.0467552011,
    "1987": 0.0399803296,
    "1988": 0.040742474,
    "1989": 0.0537761312,
    "1990": 0.0327839118,
    "1991": 0.0480470475,
    "1992": 0.0281075521,
    "1993": 0.0298252956,
    "1994": 0.0449954015,
    "1995": 0.0307577666,
    "1996": 0.0369064332,
    "1997": 0.0379313635,
    "1998": 0.0410162429,
    "1999": 0.0434860665,
    "2000": 0.0429922976,
    "2001": 0.043015255,
    "2002": 0.038259305,
    "2003": 0.0460499631,
    "2004": 0.041250762,
    "2005": 0.0408814446,
    "2006": 0.0443157158,
    "2007": 0.0453611975,
    "2008": 0.0537143091,
    "2009": 0.0490790126,
    "2010": 0.0519360255,
    "2011": 0.0580248489,
  },
};

// Transform data into format recharts expects
const years = Object.keys(chartData.disgust);
// const transformedData = years.map((year) => ({
//   year,
//   disgust: chartData.disgust[year],
//   fear: chartData.fear[year],
//   anger: chartData.anger[year],
//   neutral: chartData.neutral[year],
//   sadness: chartData.sadness[year],
//   surprise: chartData.surprise[year],
//   joy: chartData.joy[year],
// }));

// Same
const transformedData = years.map((year) => ({
  year,
  ...Object.keys(chartData).reduce(
    (acc, emotion) => ({
      ...acc,
      [emotion]: chartData[emotion][year],
    }),
    {}
  ),
}));

const chartConfig = {
  disgust: {
    label: "Disgust",
    color: "hsl(var(--disgust))",
  },
  fear: {
    label: "Fear",
    color: "hsl(var(--fear))",
  },
  anger: {
    label: "Anger",
    color: "hsl(var(--anger))",
  },
  neutral: {
    label: "Neutral",
    color: "hsl(var(--neutral))",
  },
  sadness: {
    label: "Sadness",
    color: "hsl(var(--sadness))",
  },
  surprise: {
    label: "Surprise",
    color: "hsl(var(--surprise))",
  },
  joy: {
    label: "Joy",
    color: "hsl(var(--joy))",
  },
} satisfies ChartConfig;

export function TimeLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Emotions Over Time</CardTitle>
        <CardDescription>
          Distribution of emotions in movies from 1925 to 2011
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={transformedData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
            height={400}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {Object.keys(chartConfig).map((emotion) => (
              <Line
                key={emotion}
                dataKey={emotion}
                type="monotone"
                stroke={chartConfig[emotion as keyof typeof chartConfig].color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing emotional distribution in movies over time from 1925 to
              2011
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
