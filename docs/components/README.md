

---
title: Components
sidebar: auto
---

# Components

## v-button 

### slots 

- `default`  

### props 

- `disabled` ***Boolean*** (*optional*) `default: false` 

- `type` ***String*** (*optional*) `default: 'button'` 

### computed properties 

- `component` 

   **dependencies:** `$attrs`, `$attrs` 

## v-card 

### slots 

- `header` Use this slot to for the card header 

- `body` Use this slot to for the card body, which is the middle area 

- `footer` Use this slot to for the card footer 

## checkbox 

A simple checkbox component 

- **author** - Sébastien 
- **license** - MIT 
- **input** 

### slots 

- `default`  

- `label` Use this slot to set the checkbox label 

### props 

- `model` ***Array*** (*required*) 

   The checkbox model 

- `disabled` ***Boolean*** (*optional*) 

   Initial checkbox state 

- `enabled` ***Boolean*** (*optional*) `default: true` 

   Initial checkbox value 

- `label` ***String*** (*optional*) `default: 'Unamed checkbox'` 

   The checkbox label 

- `object` ***Object*** (*optional*) `default: null` 

- `bool-false` ***Boolean*** (*optional*) `default: false` 

### data 

- `initialValue` 

   The initial component value. Used to detect changes and restore the initial value. 

**initial value:** `''` 

- `currentValue` 

**initial value:** `''` 

### computed properties 

- `id` 

   The component identifier. Generated using the `initialValue` data. 

   **dependencies:** `initialValue` 

- `changed` 

   **dependencies:** `currentValue`, `initialValue` 

- `withNoDependencies` 

### events 

- `loaded` 

   Emitted when the component has been loaded 

- `enabled` 

   Emitted the event `enabled` when loaded Multilign 

### methods 

- `check()` 

   Check if the input is checked 

- `prop()` 

- `dynamic()` 

   Make component dynamic 

- `dynamic2()` 

   Enter to dynamic mode 

- `enable(value)` 

   Enable the checkbox 

## v-icon 

## v-input 

The custom HTML `<input>` component. 

### props 

- `type` ***String*** (*optional*) `default: 'text'` 

- `v-model` ***String|Number*** (*optional*) 

   Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type. 

- `label` ***String*** (*optional*) `default: ''` 

   Provide a label 

### computed properties 

- `listeners` 

   Responsible for emitting all events from an inner element to the parent. The input method ensures that v-model works with the parent. 

   **dependencies:** `$listeners`, `$emit` 

### methods 

- `setFocus()` 

   Sets focus on input. Can be called programatically by setting an a ref and then calling this method Ex: `<v-button 

## v-menu-button 

### slots 

- `default`  

### props 

- `checked` ***Boolean*** (*optional*) `default: false` 

### computed properties 

- `menuIsActive` 

   **dependencies:** `checked` 

## v-textarea 

The custom HTML `<textarea>` component. 

- **author** - Sébastien 
- **license** - MIT 

### slots 

- `label` Use this slot to set the label 

### props 

- `v-model` ***String*** (*optional*) 

   Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type. 

- `id` ***String*** (*required*) 

   Defines a unique identifier (ID) which must be unique in the whole document. 

- `disable` ***Boolean*** (*optional*) `default: false` 

   This Boolean property indicates that the user cannot interact with the control. 

### events 

- `input` 

   Fired when the value is changed. 

   **arguments:** 

     - `value` **string** - The updated value 

- `keyup` 

   Fired when a key is released. 

### methods 

- `isEmpty()` 

   Define if the control value is empty of not. 

   **return value:** 

     - **boolean** - true if empty; otherwise false 
