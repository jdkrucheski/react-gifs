describe("Tests in DemoComponnent", () => {
  test("Demo test", () => {
    // 1. Arrange: Establecer el estado inicial, el sujeto/ambiente a testear o la inicialización:
    const message = "Hola mundo";

    // 2. Act: Aplicar acciones o estimulos:
    const newMessage = message.trim();

    // 3. Assert: Obcervar el comportamiento resultante:
    expect(message).toBe(newMessage);
  });
});
