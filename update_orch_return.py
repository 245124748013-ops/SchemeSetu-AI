with open('backend/agent_orchestrator.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if '"profile": profile,' in line:
        new_lines.append(line)
        new_lines.append('            "has_conflict": has_conflict,\n')
        new_lines.append('            "conflict_message": conflict_msg,\n')
    else:
        new_lines.append(line)

with open('backend/agent_orchestrator.py', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Updated return statement in agent_orchestrator.py!")
