import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
      "country": "AD",
      "hot dog": 45,
      "burger": 93,
      "sandwich": 191,
      "kebab": 3,
      "fries": 148,
      "donut": 144
    },
    {
      "country": "AE",
      "hot dog": 138,
      "burger": 198,
      "sandwich": 168,
      "kebab": 36,
      "fries": 170,
      "donut": 46
    },
    {
      "country": "AF",
      "hot dog": 59,
      "burger": 54,
      "sandwich": 64,
      "kebab": 75,
      "fries": 41,
      "donut": 5
    },
    {
      "country": "AG",
      "hot dog": 190,
      "burger": 177,
      "sandwich": 103,
      "kebab": 40,
      "fries": 106,
      "donut": 120
    },
    {
      "country": "AI",
      "hot dog": 129,
      "burger": 37,
      "sandwich": 40,
      "kebab": 37,
      "fries": 161,
      "donut": 195
    },
    {
      "country": "AL",
      "hot dog": 68,
      "burger": 127,
      "sandwich": 164,
      "kebab": 0,
      "fries": 80,
      "donut": 71
    },
    {
      "country": "AM",
      "hot dog": 185,
      "burger": 44,
      "sandwich": 93,
      "kebab": 21,
      "fries": 113,
      "donut": 46
    }
  ]
export const BarChart = () => (
    <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']} // 👈 ضروري
    indexBy="country"
    labelSkipWidth={12}
    labelSkipHeight={12}
    legends={[
        {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 16
        }
    ]}
    axisBottom={{ legend: 'country (indexBy)', legendOffset: 32 }}
    axisLeft={{ legend: 'food', legendOffset: -40 }}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
/>

)
