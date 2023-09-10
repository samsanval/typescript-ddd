Feature: Book

  Scenario: Get Book
    When I made a request to "api/book/2"
    Then The response status is 200
    Then The body response should be:
    """
    {"id":"2","title":{"value":"Otro"}}
    """