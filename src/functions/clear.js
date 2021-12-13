export default function clear() {
  output.textContent = output.textContent.slice(
    0,
    output.textContent.length - 1
  );
}
