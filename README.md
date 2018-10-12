## Responsive Mine Sweeper with React and Redux

### Components

1. MinerApp a containr for main components.
2. MediaQuery for responsiveness.
3. MineField a field with mines.
4. Field individual fields.
5. FieldContent model the Content to be displayed for each field.
6. ControlPanel to implement restart & done functionality as well as showing result.
7. Timer to update clock on the control panel.

### Models

1. FieldData contains main structure and functionality of the game. Initializing state of the game board is also part of the model.
2. Events is an enum containing all the relevant event throws by the game.
3. Actions define what happens on user click and other event.

### Store

Store contains reducer to dispatch event for particular action in case of the particular event.
