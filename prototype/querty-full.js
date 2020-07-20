{
    rows: [
        //keys inheriting from other keys ie: a key inheriting caps behavior from another
        //Multiple presses of a key with accent key scrolling through the various accent types
        // Action keys as a subtype object of keys (interface?)
        // Input keys as a separate object
        [
            //{ label: '', unique: '', caps: '', action: '', style: '', class: '', modifiers: { shift: '', control: '', alt: '', super: '' } },
            { label: '1' },
            { label: '2' },
            { label: '3' },
            { label: '4' },
            { label: '5' },
            { label: '6' },
            { label: '7' },
            { label: '8' },
            { label: '9' },
            { label: '0' },
            { label: 'backspace', action: 'backspace' }
        ],
        [
            { label: 'tab', action: 'tab' },
            { label: 'Q' },
            { label: 'W' },
            { label: 'E' },
            { label: 'R' },
            { label: 'T' },
            { label: 'Y' },
            { label: 'U' },
            { label: 'I' },
            { label: 'O' },
            { label: 'P' },
            { label: '{' },
            { label: '}' },
            { label: '|' },
        ],
        [
            { label: 'caps-lock', action: 'caps' },
            { label: 'A' },
            { label: 'S' },
            { label: 'D' },
            { label: 'F' },
            { label: 'G' },
            { label: 'H' },
            { label: 'J' },
            { label: 'K' },
            { label: 'L' },
            { label: ':' },
            { label: '"' },
            { label: 'Return', action: 'Return' },
            { label: '' },
        ],
        [
            { label: 'Shift', action: 'shift' },
            { label: 'z' },
            { label: 'x' },
            { label: 'c' },
            { label: 'V' },
            { label: 'B' },
            { label: 'N' },
            { label: 'M' },
            { label: '<' },
            { label: '>' },
            { label: '?' },
            { label: 'Shift', action: 'shift' },
        ],
        [
            { label: 'Shift', action: 'shift' },
            { label: 'z' },
            { label: 'x' },
            { label: 'c' },
            { label: 'V' },
            { label: 'B' },
            { label: 'N' },
            { label: 'M' },
            { label: '<' },
            { label: '>' },
            { label: '?' },
            { label: 'Shift', action: 'shift' },
        ],
        [
            { label: 'Control', action: 'control' },
            { label: 'Super', action: 'super' },
            { label: 'Alt', action: 'alt' },
            { label: 'space' },
            { label: 'left' }, //
            { label: 'down' }, //
            { label: 'up' }, //
            { label: 'right' }, //

        ]
    ]
}