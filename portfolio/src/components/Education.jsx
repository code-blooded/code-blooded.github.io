import React from 'react';
import { Timeline, Card, List } from 'antd';

class Education extends React.Component {
    render() {
        return (
            <Timeline mode="left">
                <Timeline.Item key="1" color="green">
                    <Card title={<span><a href="#">2015</a> - BITS Pilani</span>}>
                    <p>
                        I completed my undergraduate from BITS Pilani where I strengthened computer science fundamentals, developed a temprament towards logical thinking, built strong friendships and explored many avenues.
                    </p>
                    <List header={<h1>Achievements</h1>}>
                        <List.Item>Lead the college chess team and won two gold medals and one silver</List.Item>
                        <List.Item>Part of the Volleyball team</List.Item>
                    </List>
                    </Card>
                </Timeline.Item>
            </Timeline>
        );
    }
}

export default Education;