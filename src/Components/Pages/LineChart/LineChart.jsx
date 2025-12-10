import { ResponsiveLine } from '@nivo/line'


const data = [
    {
      "id": "japan",
      "data": [
        {
          "x": "plane",
          "y": 277
        },
        {
          "x": "helicopter",
          "y": 142
        },
        {
          "x": "boat",
          "y": 102
        },
        {
          "x": "train",
          "y": 228
        },
        {
          "x": "subway",
          "y": 195
        },
        {
          "x": "bus",
          "y": 54
        },
        {
          "x": "car",
          "y": 262
        },
        {
          "x": "moto",
          "y": 118
        },
        {
          "x": "bicycle",
          "y": 255
        },
        {
          "x": "horse",
          "y": 100
        },
        {
          "x": "skateboard",
          "y": 274
        },
        {
          "x": "others",
          "y": 237
        }
      ]
    },
    {
      "id": "france",
      "data": [
        {
          "x": "plane",
          "y": 2
        },
        {
          "x": "helicopter",
          "y": 247
        },
        {
          "x": "boat",
          "y": 3
        },
        {
          "x": "train",
          "y": 267
        },
        {
          "x": "subway",
          "y": 170
        },
        {
          "x": "bus",
          "y": 193
        },
        {
          "x": "car",
          "y": 41
        },
        {
          "x": "moto",
          "y": 177
        },
        {
          "x": "bicycle",
          "y": 64
        },
        {
          "x": "horse",
          "y": 138
        },
        {
          "x": "skateboard",
          "y": 263
        },
        {
          "x": "others",
          "y": 212
        }
      ]
    },
    {
      "id": "us",
      "data": [
        {
          "x": "plane",
          "y": 219
        },
        {
          "x": "helicopter",
          "y": 273
        },
        {
          "x": "boat",
          "y": 297
        },
        {
          "x": "train",
          "y": 243
        },
        {
          "x": "subway",
          "y": 255
        },
        {
          "x": "bus",
          "y": 235
        },
        {
          "x": "car",
          "y": 248
        },
        {
          "x": "moto",
          "y": 267
        },
        {
          "x": "bicycle",
          "y": 285
        },
        {
          "x": "horse",
          "y": 56
        },
        {
          "x": "skateboard",
          "y": 299
        },
        {
          "x": "others",
          "y": 44
        }
      ]
    },
    {
      "id": "germany",
      "data": [
        {
          "x": "plane",
          "y": 178
        },
        {
          "x": "helicopter",
          "y": 82
        },
        {
          "x": "boat",
          "y": 218
        },
        {
          "x": "train",
          "y": 85
        },
        {
          "x": "subway",
          "y": 16
        },
        {
          "x": "bus",
          "y": 287
        },
        {
          "x": "car",
          "y": 298
        },
        {
          "x": "moto",
          "y": 182
        },
        {
          "x": "bicycle",
          "y": 30
        },
        {
          "x": "horse",
          "y": 295
        },
        {
          "x": "skateboard",
          "y": 168
        },
        {
          "x": "others",
          "y": 94
        }
      ]
    },
    {
      "id": "norway",
      "data": [
        {
          "x": "plane",
          "y": 292
        },
        {
          "x": "helicopter",
          "y": 297
        },
        {
          "x": "boat",
          "y": 186
        },
        {
          "x": "train",
          "y": 225
        },
        {
          "x": "subway",
          "y": 144
        },
        {
          "x": "bus",
          "y": 246
        },
        {
          "x": "car",
          "y": 94
        },
        {
          "x": "moto",
          "y": 104
        },
        {
          "x": "bicycle",
          "y": 43
        },
        {
          "x": "horse",
          "y": 43
        },
        {
          "x": "skateboard",
          "y": 151
        },
        {
          "x": "others",
          "y": 226
        }
      ]
    }
  ];


export const LineChart = () => (
    <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        margin={{ top: 80, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
)