# Angular

----------------------------
[TOC]


### Knowledge round-up

- **Component**

1. Briefly explain Event Binding in Angular?
  `Answer: `
Event binding allows us to send information from the view to the component class.
  2.  Briefly explain Data Binding in Angular?
  `Answer: `
Data Binding happen when we changes in the application state, data will automatically reflected into the view and from view to application.
  3. What are Event Emitters and how it works in Angular?
	`Answer: `
Event Emitter happen when we change a component, it will make a notification that something has changed, via events.
  4. Explain the life cycle hooks of Angular application?
`Answer: `
In Angular, a component has a life cycle.
First, Angular create it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.
Life cycle hooks provide us a visibility into components's key life moments and the ability to action when they occur.

  5. Explain the `ContentChild` `ContentChildren` and write an example?
`  Answer:`
 `ContentChild` and `ContentChildren` is all show child projected content within the component, but children mean that it is a list of childs content.
	 `ContentChildren` will not be set until ngAfterContentInit component lifecycle hook.
	@ViewChildren look for elements in Shadow DOM.
	 @ContentChildren look for them in Light DOM.
	
- **Extra**
  - Briefly explain ElementRef in Angular? Write an example.
`Answer: `
ElementRef provides access to the underlying native element (DOM element).

----------------------------------


