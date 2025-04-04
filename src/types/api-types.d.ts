export interface paths {
    "/fronttemp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        //Получить список матчей
        get: operations["fetch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Player: {
            /** @description Имя игрока */
            username: string;
            /** @description Количество убийств */
            kills: number;
        };
        Team: {
            /** @description Название команды */
            name: string;
            players: components["schemas"]["Player"][];
            /** @description Количество очков */
            points: number;
            /** @description Место в турнирной таблице */
            place: number;
            /** @description Количество убийств */
            total_kills: number;
        };
        /**
         * @description Статус матча
         * @enum {string}
         */
        MatchStatus: "Scheduled" | "Ongoing" | "Finished";
        Match: {
            /**
             * Format: date-time
             * @description Время проведения матча
             */
            time: string;
            /** @description Название матча */
            title: string;
            homeTeam: components["schemas"]["Team"];
            awayTeam: components["schemas"]["Team"];
            /** @description Счет домашней команды */
            homeScore: number;
            /** @description Счет гостевой команды */
            awayScore: number;
            status: components["schemas"]["MatchStatus"];
        };
        "Successful-Response": {
            /**
             * @description Indicated whether the response is successful.
             * @default true
             */
            ok: boolean;
            /** @description If successful, response from api */
            data: Record<string, never>;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    fetch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Список матчей */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Successful-Response"] & {
                        data?: {
                            matches: components["schemas"]["Match"][];
                        };
                    };
                };
            };
        };
    };
}


export type Match = components['schemas']['Match'];
export type MatchStatus = components['schemas']['MatchStatus'];
export type Player = components['schemas']['Player'];
export type Team = components['schemas']['Team'];