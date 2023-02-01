# features/odd.feature
Feature: Is that number odd?
  Scenario: Four isn't odd
    When I ask is "4" odd
    Then I should be told "false"

  Scenario: Three is odd
    When I ask is "3" odd
    Then I should be told "true"
