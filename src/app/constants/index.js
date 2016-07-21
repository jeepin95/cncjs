// Controller
export const GRBL = 'Grbl';
export const TINYG2 = 'TinyG2';

// G-code Workflow State
export const WORKFLOW_STATE_RUNNING = 'running';
export const WORKFLOW_STATE_PAUSED = 'paused';
export const WORKFLOW_STATE_IDLE = 'idle';

// Grbl Active State
export const GRBL_ACTIVE_STATE_IDLE = 'Idle';
export const GRBL_ACTIVE_STATE_RUN = 'Run';
export const GRBL_ACTIVE_STATE_HOLD = 'Hold';
export const GRBL_ACTIVE_STATE_DOOR = 'Door';
export const GRBL_ACTIVE_STATE_HOME = 'Home';
export const GRBL_ACTIVE_STATE_ALARM = 'Alarm';
export const GRBL_ACTIVE_STATE_CHECK = 'Check';

// TinyG2 Machine State
// https://github.com/synthetos/TinyG/wiki/TinyG-Status-Codes#status-report-enumerations
export const TINYG2_MACHINE_STATE_INIT = 0; // machine is initializing
export const TINYG2_MACHINE_STATE_READY = 1; // machine is ready for use
export const TINYG2_MACHINE_STATE_ALARM = 2; // machine is in alarm state (soft shut down)
export const TINYG2_MACHINE_STATE_STOP = 3; // program stop or no more blocks (M0, M1, M60)
export const TINYG2_MACHINE_STATE_END = 4; // program end via M2, M30
export const TINYG2_MACHINE_STATE_RUN = 5; // motion is running
export const TINYG2_MACHINE_STATE_HOLD = 6; // motion is holding
export const TINYG2_MACHINE_STATE_PROBE = 7; // probe cycle active
export const TINYG2_MACHINE_STATE_CYCLING = 8; // machine is running (cycling)
export const TINYG2_MACHINE_STATE_HOMING = 9; // machine is homing
export const TINYG2_MACHINE_STATE_JOGGING = 10; // machine is jogging
export const TINYG2_MACHINE_STATE_SHUTDOWN = 11; // machine is in hard alarm state (shut down)

// Grbl Real-time Commands: ~, !, ?, and Ctrl-x
export const GRBL_REALTIME_COMMANDS = [
    '~', // Cycle Start
    '!', // Feed Hold
    '?', // Current Status
    '\x18' // Reset Grbl (Ctrl-X)
];

// https://github.com/grbl/grbl/wiki/Configuring-Grbl-v0.9
// http://linuxcnc.org/docs/html/gcode/overview.html#cap:modal-groups
export const GRBL_MODAL_GROUPS = [
    { // Motion Mode (Defaults to G0)
        group: 'motion',
        modes: ['G0', 'G1', 'G2', 'G3', 'G38.2', 'G38.3', 'G38.4', 'G38.5', 'G80']
    },
    { // Coordinate System Select (Defaults to G54)
        group: 'coordinate',
        modes: ['G54', 'G55', 'G56', 'G57', 'G58', 'G59']
    },
    { // Plane Select (Defaults to G17)
        group: 'plane',
        modes: ['G17', 'G18', 'G19']
    },
    { // Units Mode (Defaults to G21)
        group: 'units',
        modes: ['G20', 'G21']
    },
    { // Distance Mode (Defaults to G90)
        group: 'distance',
        modes: ['G90', 'G91']
    },
    { // Feed Rate Mode (Defaults to G94)
        group: 'feedrate',
        modes: ['G93', 'G94']
    },
    { // Program Mode (Defaults to M0)
        group: 'program',
        modes: ['M0', 'M1', 'M2', 'M30']
    },
    { // Spindle State (Defaults to M5)
        group: 'spindle',
        modes: ['M3', 'M4', 'M5']
    },
    { // Coolant State (Defaults to M9)
        group: 'coolant',
        modes: ['M7', 'M8', 'M9']
    }
];
