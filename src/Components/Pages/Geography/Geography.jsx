import { Box, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import { data } from './data';
import { countries } from './World_Countries';

export const Geography = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                height: '75vh',
                mt: { xs: 10, sm: 11 }, // push content below fixed navbar
                p: 2,
                borderRadius: 2,
                bgcolor: theme.palette.background.paper,
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                border: `1px solid ${theme.palette.divider}`,
            }}
        >
            <ResponsiveChoropleth
                data={data}
                features={countries.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[0, 1_000_000]}
                unknownColor={theme.palette.grey[700]}
                label="properties.name"
                valueFormat=".2s"
                enableGraticule
                graticuleLineColor={theme.palette.divider}
                borderWidth={0.6}
                borderColor={theme.palette.grey[800]}
                projectionScale={120}
                projectionTranslation={[0.5, 0.55]}
                projectionRotation={[0, 0, 0]}
                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -100,
                        itemsSpacing: 4,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: theme.palette.text.secondary,
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: theme.palette.text.primary,
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                theme={{
                    background: 'transparent',
                    textColor: theme.palette.text.primary,
                    fontSize: 12,
                    tooltip: {
                        container: {
                            background: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                            borderRadius: 8,
                            padding: '8px 10px',
                        },
                    },
                }}
            />
        </Box>
    );
};