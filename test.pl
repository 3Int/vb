% Player role definitions
player_role(joe, setter).
player_role(joe, middle).
player_role(alice, libero).
player_role(alice, outside).
player_role(bob, middle).
player_role(bob, outside).
player_role(gleichmitte, middle).

% Dynamic predicate to store assignments
:- dynamic assigned_role/2.

% Clear previous assignments
clear_assignments :- retractall(assigned_role(_, _)).

% Assign roles to players
assign_roles([]).
assign_roles([Player|Rest]) :-
    player_role(Player, Role),
    assertz(assigned_role(Player, Role)),
    assign_roles(Rest).

% Check if the team is valid
valid_team(Team) :-
    aggregate_all(count, (member(Player, Team), assigned_role(Player, setter)), 1),
    aggregate_all(count, (member(Player, Team), assigned_role(Player, libero)), 1),
    aggregate_all(count, (member(Player, Team), (assigned_role(Player, middle); assigned_role(Player, outside))), 2).

% Find all valid role assignments for a team
find_valid_team(Team, ValidAssignments) :-
    findall(Assignments, (
        clear_assignments,
        assign_roles(Team),
        valid_team(Team),
        findall(Player-Role, assigned_role(Player, Role), Assignments)
    ), ValidAssignments).

% Example team
team([joe, alice, bob, gleichmitte]).

% Find and print all valid assignments
solve :-
    team(Team),
    find_valid_team(Team, ValidAssignments),
    writeln('Valid assignment:'),
    writeln(ValidAssignments),
    fail.
solve :- writeln('No more valid assignments.').
