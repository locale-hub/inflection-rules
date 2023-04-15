
export interface RuleEntry {
    match: RegExp,
    replace: string
}

export type Rules = {
    irregular?: Record<string, string>
    // one is ignored as text would simply be returned as is
    zero?: RuleEntry[]
    two?: RuleEntry[]
    few?: RuleEntry[]
    many?: RuleEntry[]
    other?: RuleEntry[]
}
