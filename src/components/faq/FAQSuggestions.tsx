interface FAQSuggestionsProps {
  suggestions: readonly string[]
  onSelect: (question: string) => void
}

export function FAQSuggestions({ suggestions, onSelect }: FAQSuggestionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          onClick={() => onSelect(suggestion)}
          className="rounded-full border border-border bg-white px-3 py-1.5 text-left text-xs font-medium text-navy-deep transition hover:border-blue-corporate hover:bg-blue-light"
        >
          {suggestion}
        </button>
      ))}
    </div>
  )
}
