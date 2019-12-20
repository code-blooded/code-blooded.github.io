import React from 'react';
import { Timeline, Card, List } from 'antd';

class Work extends React.Component {
    render() {
        return (
            <Timeline mode="left">
            <Timeline.Item key="1" color="green">
                <Card title={<span><a href="#">2019 - Present</a> - Nutanix</span>}>
                <p>
                In July 2019 I started my journey at Nutanix as a full time employee for the role Member of Technical Staff (MTS). I have been working on Nutanix on GCP.
                </p>
                {/* <List header={<h1>Achievements</h1>}>
                    <List.Item>MTS3 title assignment in the span of only 1 year</List.Item>
                </List> */}
                </Card>
            </Timeline.Item>
            </Timeline>
        );
    }
}

export default Work;