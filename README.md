# version 1

Problem: Poor state management - Props are cloned multiple times
solution: introduce a Context for holding data

# version 2

Problem: Poor model/view separation  - any change on DataModel requires update on UI components
solution: introduce a view model and serve from Data Context - apply OOP

# version 3

Problem: Poor reuseability of UI components, loosely coupling
solution: Higher order component for injecting value to Display components, business carried on WithDataCalculator

# version 4

Problem: Poor encapsulation - unnecessary logic in Higher Order Component
solution: introduce a new method in DataContextModel and use it


# version 5

Problem: WithDataCalculator can consume data as it is intended for it
solution: carry DataContext Consumer into HOC.

# version 6
What we have achieved
- data calculation business is carried on HOC and class model
- UI components are reusable
- straight to add new UI components that visualise some calculation out of data

Problem: WithDataCalculator can only inject a data type of number - so hard to wrap a display a component taking a string
Solution: make val type any...

# version 7

Problem: any ???? no good.
solution: use generic type

# version 8

Problem: no open-closed principle in findValue of DataContextModel
solution: let each component brings its own calculation

# version 9
WithDataCalculator takes its computation function as an optional argument 
it is possible to embedd this function into ExtraInfo  - live demonstration?

