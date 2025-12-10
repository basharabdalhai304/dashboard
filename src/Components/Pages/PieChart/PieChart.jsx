import { ResponsivePie } from '@nivo/pie'
const data = [
    {
      "id": "scala",
      "label": "scala",
      "value": 247,
      "color": "hsl(131, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 176,
      "color": "hsl(81, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 204,
      "color": "hsl(101, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 124,
      "color": "hsl(135, 70%, 50%)"
    },
    {
      "id": "hack",
      "label": "hack",
      "value": 216,
      "color": "hsl(202, 70%, 50%)"
    }
  ]

export const PieChart = () => (
    <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        margin={{ top: 80, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#444444"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />
)