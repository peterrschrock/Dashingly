## Component Hierarchy

**AuthenticationContainer**
 - Authentication Component

**NavBar Component**

**UploadContainer**
 - Upload Component

**ShareContainer**
 - Share Component
  + ShareWithSearch Component
  + AlreadyShared Component

**DashboardsHomeContainer**
 - DashboardsIndex Component
  + DashboardElement Component
 - ToggleOwnedFilter Component
 - DashboardModOptions Component

**OneDashboardContainer**
 - TitleBar Component
 - ShowDashboard Component
  + AddChart Component
  + ChartAndCRUD Component
    + ChartItem Component
    + AddChart Component
    + EditRemoveChart Component

**ChartsHomeContainer**
 - ChartIndex Component
  + ChartItem Component
 - ToggleOwnedFilter Component
 - DashboardModOptions Component

**OneChartContainer**
 - ChartItem Component
 - ChartTypes Component
 - ChartValues Component
  + Y-axis Component
 - ChartModification Component


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthenticationContainer" |
| "/sign-in" | "AuthenticationContainer" |
| "/upload" | "UploadContainer" |

| "/dashboards" | "DashboardsHomeContainer" |
| "/dashboards/shared" | "DashboardsHomeContainer" |
| "/dashboards/new" | "OneDashboardContainer" |
| "/dashboards/:dashboardId/edit" | "OneDashboardContainer" |
| "/dashboards/:dashboardId/show" | "OneDashboardContainer" |
| "/dashboards/:dashboardId/share" | "ShareContainer" |
| "/dashboards/new/addchart/chartPos" | "OneDashboardContainer" |
| "/dashboards/:dashboardId/edit/addchart/chartPos" | "OneDashboardContainer" |
<!-- add chart? -->

| "/charts" | "ChartsHomeContainer" |
| "/charts/shared" | "ChartsHomeContainer" |
| "/charts/new" | "OneChartContainer" |
| "/charts/:chartId/edit" | "OneChartContainer" |
| "/charts/:chartId/show" | "OneChartContainer" |
| "/charts/:chartId/share" | "ShareContainer" |
