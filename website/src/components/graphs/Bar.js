import CanvasJSReact from '@canvasjs/react-charts';

const SKillsChart = () => {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    var chart;

    const options = {
        theme: 'light2', // "light1", "dark1", "dark2"
        animationEnabled: true, //Change to false
        animationDuration: 1200, //Change it to 2000
        title: {
            text: 'Skills',
        },
        data: [
            {
                axisY: {
                    minimum: 0,
                    title: "%"
                },
                type: 'column',
                dataPoints: [
                    { label: 'Backend', y: 90 },
                    { label: 'Soft Skills', y: 80 },
                    { label: 'CloudOps', y: 70 },
                    { label: 'Frontend', y: 40 },
                ],
            },
        ],
    },
    
    containerProps = {
        maxWidth: '100%',
        width: '100%'
    };

    return (
        <div>
            <CanvasJSChart
                options={options}
                onRef={(ref) => (chart = ref)}
                containerProps={containerProps}
            />
        </div>
    )


}

export default SKillsChart;