---
title: Components
sidebar: auto
---

# Components

## v-button

### slots

- `default`

### props

- `disabled` **_Boolean_** (_optional_) `default: false`

- `type` **_String_** (_optional_) `default: 'button'`

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

- `model` **_Array_** (_required_)

  The checkbox model

- `disabled` **_Boolean_** (_optional_)

  Initial checkbox state

- `enabled` **_Boolean_** (_optional_) `default: true`

  Initial checkbox value

- `label` **_String_** (_optional_) `default: 'Unamed checkbox'`

  The checkbox label

- `object` **_Object_** (_optional_) `default: null`

- `bool-false` **_Boolean_** (_optional_) `default: false`

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

- `type` **_String_** (_optional_) `default: 'text'`

- `v-model` **_String|Number_** (_optional_)

  Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type.

- `label` **_String_** (_optional_) `default: ''`

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

- `checked` **_Boolean_** (_optional_) `default: false`

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

- `v-model` **_String_** (_optional_)

  Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type.

- `id` **_String_** (_required_)

  Defines a unique identifier (ID) which must be unique in the whole document.

- `disable` **_Boolean_** (_optional_) `default: false`

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
