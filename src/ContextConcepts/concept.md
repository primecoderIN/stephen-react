With context system data can be passed from any arbitrary parent to any arbitrary child in a component tree.

Q. What is different between prop system and context system ?

Ans : In prop system data is passed from a parent component to a direct child component. But in context system data is passed from a parent component to any nested child component.

How to send data to context object ?

Source of data can be a default value or a parent component(provider)

How to access data from context object ?

using this.context or consumer

Note: If you initialize a context object with a default value then it can not be changed.

Provider is nothing but a component
