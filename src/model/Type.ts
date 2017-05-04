namespace Game{
    /** 游戏事件类型 */
    export namespace PlayerEvent {
        export const PLAYERCHANGEMAP = "PlayerChangeMap";
        export const PLAYERPASSGRIDS = "PlayerPassGrids";
        
    }
    /** 方向 */
    export const enum PLAYER_MOVE_TYPE {
        PLAYER_MOVE_LEFT = 0,
        PLAYER_MOVE_RIGHT = 1, 
        PLAYER_MOVE_UP = 2,
        PLAYER_MOVE_DOWN = 3 
    }
}