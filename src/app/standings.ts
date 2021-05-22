export class Standings {
    constructor(
        public draws: number,
        public wins: number,
        public against: number,
        public pts: number,
        public behinds_for: number,
        public losses: number,
        public goals_for: number,
        public rank: number,
        public goals_against: number,
        public id: number,
        public played: number,
        public percentage: number,
        public name: string,
        public behinds_against: number,

    ){}
}