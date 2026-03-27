% https://www.npmjs.com/package/tau-prolog or  https://www.npmjs.com/package/swipl-wasm
teams(0).
number_of_teams(X,Result):- Result is floor(X/6).
libero(tom).
libero(anh).

:-style_check(-discontiguous).

players(_/X):- X=:=1.
% introduce abbreviations used for s(etter), oh (outside hitter), opp(osite), l(ibero), m(iddle)
s(_) :- member(1, [0]).
oh(_) :- member(1, [0]).
opp(_) :- member(1, [0]).
l(_) :- member(1, [0]).
m(_) :- member(1, [0]).

team(List):-
    findall(X, (member(X, List),s(X)),Setters),
        length(Setters,1),
    findall(X, (member(X, List),oh(X)),Outsides),
        length(Outsides,2),
    findall(X, (member(X, List),opp(X)),Opposites),
        length(Opposites,1),
    % require either 2 middles or 1+1 libero.
    (findall(X, (member(X, List),m(X)),Middles),
        length(Middles, 2)
    ;
        (findall(X, (member(X, List),m(X)),Middles),
            length(Middles,1),
        findall(X, (member(X,List), l(X)),Liberos),
            length(Liberos,1)
        )
    ).
            % TODO require all sets to be A∩B = ∅ 



s(s).
oh(oh).
oh(oh2).
opp(opp).
l(l).
m(m).
