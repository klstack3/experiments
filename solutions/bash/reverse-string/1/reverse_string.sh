main() {
  printf '%s' "$1" | rev
}

main "$@"