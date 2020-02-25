import React from 'react';
import Chart from 'chart.js';

class ShowChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth };
    }
    componentDidMount() { this.updateCanvas(); }
    
    updateCanvas() {
        let isShown = false;
        (this.state.width > 768) ? isShown = true : isShown = false;
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0, 0, 100, 100);
        return new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: Object.keys(this.props.data),
                datasets: [{
                    data: Object.values(this.props.data),
                    backgroundColor: [
                        'rgba(2, 237, 61, 0.7)',
                        'rgba(237, 2, 2, 0.7)',
                        'rgba(237, 2, 214, 0.7)',
                        'rgba(237, 2, 108, 0.7)',
                        'rgba(1, 86, 12, 0.7)',
                        'rgba(2, 237, 222, 0.7)',
                        'rgba(2, 61, 237, 0.7)',
                        'rgba(237, 218, 2, 0.7)',
                        'rgba(255, 128, 0, 0.7)'
                    ],
                    label: 'Results' // for legend
                }]
            },
            options: {
                scale: {
                    angleLines: {
                        display: false
                    },
                    ticks: {
                        suggestedMin: 10,
                        suggestedMax: 10
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false
                },
                legend: {
                    display: isShown
                }
            }
        });
    }
    render() { return (<canvas ref="canvas" />); } // width={300} height={300}
}

export default ShowChart;