export const getLevelWidth = (level: string) => {
    switch ( level ) {
        case 'Expert':
            return 'w-full'
        case 'Advanced':
            return 'w-4/5'
        case 'Intermediate':
            return 'w-3/5'
        default:
            return 'w-2/5'
    }
}