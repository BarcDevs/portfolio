export const getLevelColor = (level: string) => {
    switch ( level ) {
        case 'Expert':
            return 'bg-primary text-primary-foreground'
        case 'Advanced':
            return 'bg-accent text-accent-foreground'
        case 'Intermediate':
            return 'bg-secondary text-secondary-foreground'
        default:
            return 'bg-muted text-muted-foreground'
    }
}