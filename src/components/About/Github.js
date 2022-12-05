import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      
      <GitHubCalendar
        username="4-Leafs-Code"
        blockSize={12}
        blockRadius={2}
        blockMargin={4}
        color="#7d0f9f"
        fontSize={16}
        labels={{
          legend: {
            less: 'Less',
            more: 'More'
          },
          months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          tooltip: '<strong>{{count}} contributions</strong> on {{date}}',
          totalCount: '{{count}} contributions in {{year}}',
          weekdays: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
          ]
        }}
      />
    </Row>
  );
}

export default Github;
