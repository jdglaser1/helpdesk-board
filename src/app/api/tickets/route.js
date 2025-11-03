//src/app/api/tickets.route.js
'use client'

export async function GET() {
  const tickets = [
    { id: 't-1001', title: 'Cannot connect to VPN', description: 'User reports intermittent VPN connectivity errors.', priority: 'High', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-31T14:05:00Z' },
    { id: 't-1002', title: 'Email not syncing on iPhone', description: 'User reports that Outlook emails are not updating on mobile device.', priority: 'Medium', status: 'In Progress', assignee: 'Alex Johnson', updatedAt: '2025-10-30T09:32:00Z' },
    { id: 't-1003', title: 'Printer offline in Accounting', description: 'Office printer showing offline status despite network connection.', priority: 'High', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-11-01T12:15:00Z' },
    { id: 't-1004', title: 'Password reset needed', description: 'User unable to log in after password expired.', priority: 'Low', status: 'Resolved', assignee: 'Maria Lopez', updatedAt: '2025-10-29T17:48:00Z' },
    { id: 't-1005', title: 'Slow Wi-Fi in conference room A', description: 'Connection speed drops below acceptable limits during meetings.', priority: 'Medium', status: 'In Progress', assignee: 'Ryan Carter', updatedAt: '2025-11-02T10:11:00Z' },
    { id: 't-1006', title: 'App crashing after update', description: 'Multiple users report that the accounting app crashes on launch.', priority: 'Critical', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-11-03T08:54:00Z' },
    { id: 't-1007', title: 'New employee account setup', description: 'Request for new hire account, email, and Teams access.', priority: 'Low', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-31T15:20:00Z' },
    { id: 't-1008', title: 'Shared drive access denied', description: 'User cannot open shared Marketing folder on the network.', priority: 'High', status: 'On Hold', assignee: 'James Park', updatedAt: '2025-11-01T09:00:00Z' },
    { id: 't-1009', title: 'Monitor flickering on startup', description: 'Display flickers during boot on Dell monitors in IT lab.', priority: 'Medium', status: 'In Progress', assignee: 'Sarah Nguyen', updatedAt: '2025-11-02T13:26:00Z' },
    { id: 't-1010', title: 'Outlook search not returning results', description: 'Search bar does not display emails sent in the last 7 days.', priority: 'High', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-11-03T11:45:00Z' },
    { id: 't-1011', title: 'Unauthorized login alert', description: 'Detected multiple failed login attempts from unknown IP address.', priority: 'Critical', status: 'In Progress', assignee: 'Michael Chen', updatedAt: '2025-11-03T09:40:00Z' },
    { id: 't-1012', title: 'Request for replacement headset', description: 'Employee reports microphone malfunction during Teams meetings.', priority: 'Low', status: 'Resolved', assignee: 'Maria Lopez', updatedAt: '2025-10-28T16:00:00Z' },
    { id: 't-1013', title: 'Contractor VPN access request', description: 'External contractors need temporary VPN credentials.', priority: 'Medium', status: 'On Hold', assignee: 'James Park', updatedAt: '2025-11-01T19:00:00Z' },
    { id: 't-1014', title: 'Database backup failed', description: 'Nightly SQL backup job did not complete successfully.', priority: 'Critical', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-11-03T06:30:00Z' },
    { id: 't-1015', title: 'Keyboard not responding on desktop', description: 'USB keyboard not detected by workstation in HR office.', priority: 'Medium', status: 'In Progress', assignee: 'Ryan Carter', updatedAt: '2025-10-30T10:14:00Z' },
    { id: 't-1016', title: 'Phishing email investigation', description: 'Suspicious email claiming to be from IT support reported by user.', priority: 'High', status: 'Resolved', assignee: 'Michael Chen', updatedAt: '2025-11-02T08:22:00Z' }
  ];
}