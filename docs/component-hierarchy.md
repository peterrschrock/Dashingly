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
 - ChartAndTypes Component
  + ChartItem Component
  + ChartTypes Component
 - Chart Options
  + Y-axis Component


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NotesContainer" |
| "/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-note" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" |
